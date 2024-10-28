/*document.addEventListener("DOMContentLoaded", (event) => {
  const signUpButton = document.querySelector(".sign_up_button");

  signUpButton.addEventListener("click", change_style);

  function change_style() {
    signUpButton.classList.toggle("click_active");
  }
});
*/
$(document).ready(function () {
  $(".sign_up_button").click(function (event) {
    event.preventDefault(); // 阻止表单的默认提交行为
    var UserData = {
      username: $("#username").val(),
      password: $("#password").val(),
    };
    $.ajax({
      url: "http://127.0.0.1:8000/sign",
      type: "POST",
      contentType: "application/json", // 设置内容类型
      data: JSON.stringify(UserData), // 序列化为 JSON 字符串
      success: function (data) {
        console.log(data);
        if (data.status === "success") {
          window.location.href = "/test.html";
        } else {
          alert(data.message);
        }
      },
      error: function () {
        alert("error");
      },
    });
  });
});
