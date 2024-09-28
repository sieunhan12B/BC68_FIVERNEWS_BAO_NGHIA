import React, { useContext } from 'react'
import InputCustom from '../../components/Input/InputCustom'
import { useFormik } from 'formik'
import { authService } from '../../services/auth.service'
import { NotificationContext } from '../../App'
import { getLocalStorage, setLocalStorage } from '../../utils/utils'
import { useDispatch } from 'react-redux'
import { setValueUser } from '../../redux/authSlice'
import { useNavigate } from 'react-router-dom'
import { pathDefault } from '../../common/path'

const AdminLogin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { handleNotification } = useContext(NotificationContext)
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      console.log(values)
      authService.signIn(values).then((res) => {
        console.log(res)
        // thực hiện kiểm tra xem người đăng nhập có phải user không
        if (res.data.content.user.role == "USER") {
          // B1: thông báo người dùng không được phép truy cập 
          handleNotification("Bạn không được phép truy cập", "error")
          let viPham = getLocalStorage("viPham")
          if (!viPham) {
            setLocalStorage("viPham", 1)
          } else {
            viPham++
            viPham == 3 ? window.location.href = "https://google.com" : setLocalStorage('viPham', viPham)
          }
        } else {
          setLocalStorage("user", res.data.content)
          dispatch(setValueUser(res.data.content))
          localStorage.removeItem("viPham")
          navigate(pathDefault.admin)
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  })

  return (
    <div>
      <div className="container">
        <div className="admin_login h-screen flex">
          <div className="admin_login_animation w-1/2"></div>
          <div className="admin_login_form w-1/2 flex flex-col justify-center">
            <form className='space-y-4' onSubmit={handleSubmit}>
              <h1 className='text-3xl font-bold text-center'>Trang đăng nhập cho admin</h1>
              <InputCustom contentLabel="Email" name="email" onChange={handleChange} value={values.email} />
              <InputCustom contentLabel="Password" type='password' name="password" onChange={handleChange} value={values.password} />
              <div>
                <button type='submit' className="py-2 px-5 bg-black text-white rounded-lg inline-block w-full">Đăng nhập</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin