var map = null;
    var markerArray = [];
    function submit(){

    var val = $("#id_one").val();
    var xhr = new XMLHttpRequest();
    xhr.open('POST', "http://35.223.9.111:80", true);
    data = new FormData();
    data.append("type", val);
    if(val != "cancer")
      {console.log("Here");
       console.log(data);
    data.append("img", $("#file_").prop('files')[0]);}
    xhr.onreadystatechange = function(){

      var obj = JSON.parse(this.responseText)[0];
      if(!obj["empty"])
      {

        $("#status").html("<b>"+obj["tumor"]+"</b>")
        $("#status1").html("<b>"+obj["normal"]+"</b>")
        document.getElementById("demo").innerHTML = "Analysis Report";
        clear();
        $("#result").html("<b>"+obj["pred_val"]+"</b>")

      }
    };
    xhr.send(data);
  }
  

