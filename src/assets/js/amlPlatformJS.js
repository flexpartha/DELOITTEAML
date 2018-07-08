

function showLoginForm(){
    var x1 = document.getElementById("loginBtn");
    if (x1.style.background === "white") {
      x1.style.background = "black";
      x1.style.color="white";
  } else {
      x1.style.background = "white";
      x1.style.color="black";
  }
    //document.getElementById("loginBtn").style.background="#3C91E6";
    var x = document.getElementById("inputDown");
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
  }

  function disibleNotification(){
    document.getElementById("notificatonArea").style.display="none";
  }

  function login(){
    	if(document.getElementById("userName").value=="partha" && document.getElementById("pwd").value=="cha") 
        {
            var winWidth = $( window ).width();
            if(winWidth==768)
            {
                alert("HI");
                document.getElementById("divMiddlecenter").style.display="none";
                document.getElementById("divMidAfterLogin").style.display="block";
                document.getElementById("inputDown").style.display="none";
                document.getElementById("userName").value="";
                document.getElementById("pwd").value="";
                document.getElementById("loginBtn").style.background = "black";
                document.getElementById("loginBtn").style.color = "white";
                document.getElementById("divMain").style.height = "424px";
                document.getElementById("divMidAfterLogin").style.height = "470px";
                document.getElementById("divMidAfterLogin").style.marginTop = "-330px";
                document.getElementById("divMidAfterLogin").style.marginLeft = "45px";
                document.getElementById("notificatonArea").style.display="none";
            }
            if(winWidth>=1200)
            {
            document.getElementById("divMiddlecenter").style.display="none";
            document.getElementById("divMidAfterLogin").style.display="block";
            document.getElementById("inputDown").style.display="none";
            document.getElementById("userName").value="";
            document.getElementById("pwd").value="";
            document.getElementById("loginBtn").style.background = "black";
            document.getElementById("loginBtn").style.color = "white";
            document.getElementById("divMain").style.height = "424px";
            document.getElementById("divMidAfterLogin").style.height = "470px";
            document.getElementById("divMidAfterLogin").style.marginTop = "-330px";
            document.getElementById("divMidAfterLogin").style.marginLeft = "70px";
            document.getElementById("notificatonArea").style.display="none";
          }

          if(winWidth>=1024)
            {
            document.getElementById("divMiddlecenter").style.display="none";
            document.getElementById("divMidAfterLogin").style.display="block";
            document.getElementById("inputDown").style.display="none";
            document.getElementById("userName").value="";
            document.getElementById("pwd").value="";
            document.getElementById("loginBtn").style.background = "black";
            document.getElementById("loginBtn").style.color = "white";
            document.getElementById("divMain").style.height = "424px";
            document.getElementById("divMidAfterLogin").style.height = "470px";
            document.getElementById("divMidAfterLogin").style.marginTop = "-330px";
            document.getElementById("divMidAfterLogin").style.marginLeft = "70px";
            document.getElementById("notificatonArea").style.display="none";
          }

        }
        else{
            document.getElementById("notificatonArea").style.display="block";
        }
    }

    //window.onclick = function(event) {
        //var inputDialog = document.getElementById('inputDown');
        //if (event.target == inputDialog) {
            //inputDialog.style.display = "none";
       // }
        //alert("HI");
    //}

$(document).ready(function(){
setTimeout(function(){
$("#divCenter").fadeOut("slow", function () {
$("#divCenter").remove();
});
$("#divMain").fadeIn('slow');
}, 3000);

$(window).click(function() {
    //$("#inputDown").hide();
});

$('body').on('click', '.dropdown-menu li a', function () {
    var selText = $(this).text();
    $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + '');
  });

  $('body').on('click', '#toggleBar>li:nth-child(2)', function () {
    $('#toggleBar>li:nth-child(1)>ul').removeClass('show');
    $('#toggleBar>li:nth-child(1)>a').attr("aria-expanded","false");
    $('#toggleBar>li:nth-child(3)>ul').removeClass('show');
    $('#toggleBar>li:nth-child(3)>a').attr("aria-expanded","false");
  });

  $('body').on('click', '#toggleBar>li:nth-child(1)', function () {
    $('#toggleBar>li:nth-child(2)>ul').removeClass('show');
    $('#toggleBar>li:nth-child(2)>a').attr("aria-expanded","false");
    $('#toggleBar>li:nth-child(3)>ul').removeClass('show');
    $('#toggleBar>li:nth-child(3)>a').attr("aria-expanded","false");
  });

  $('body').on('click', '#toggleBar>li:nth-child(3)', function () {
    $('#toggleBar>li:nth-child(1)>ul').removeClass('show');
    $('#toggleBar>li:nth-child(1)>a').attr("aria-expanded","false");
    $('#toggleBar>li:nth-child(2)>ul').removeClass('show');
    $('#toggleBar>li:nth-child(2)>a').attr("aria-expanded","false");
  })
});