export const switchTab = (event, packageType) => {
  const buttons = document.querySelectorAll("button");
  const packages = document.querySelectorAll(".p-5");

  buttons.forEach((btn) =>
    btn.classList.remove("bg-white", "border-b-2", "border-black", "active")
  );
  packages.forEach((pack) => pack.classList.add("hidden"));

  event.target.classList.add(
    "bg-white",
    "border-b-2",
    "border-black",
    "active"
  );
  document.getElementById(packageType).classList.remove("hidden");
};
