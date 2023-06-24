 let note = ""
// function checkError() {
//   var thmtext = document.getElementById('txtinput').value;
//   i = thmtext.split(':')
//   note = i[1]
//
//   note = note.replace(/(ท่อน) ด/g, '$1 1');
//   note = note.replace(/(ท่อน) ร/g, '$1 2');
//   note = note.replace(/(ท่อน) 1/g, '$1 1');
//
//   console.log("checkError!");
//
// }

  //ฟังก์ชันแปลงตัวเลขเป็นตัวโน้ตไทย
  function alphabet() {
    var thmtext = document.getElementById('txtinput').value;
    i = thmtext.split(':')
    note = i[1]

    note = note.replace(/1/g, 'ด');
    note = note.replace(/2/g, 'ร');
    note = note.replace(/3/g, 'ม');
    note = note.replace(/4/g, 'ฟ');
    note = note.replace(/5/g, 'ซ');
    note = note.replace(/6/g, 'ล');
    note = note.replace(/7/g, 'ท');
    note = note.replace(/7/g, 'ท');
    note = note.replace(/8/g, 'ดํ');
    note = note.replace(/9/g, 'รํ');
    note = note.replace(/\*/g, 'ํ');
    note = note.replace(/\+/g, 'ํ');
    note = note.replace(/\./g, 'ฺ');

    document.getElementById('txtinput').value = i[0] + ":" + note;
  }

  //ฟังก์ชันแปลงตัวโน้ตไทยเป็นตัวเลข
  function numberal() {
    var thmtext = document.getElementById('txtinput').value;
    i = thmtext.split(':')
    note = i[1]

    note = note.replace(/ด/g, '1');
    note = note.replace(/ร/g, '2');
    note = note.replace(/ม/g, '3');
    note = note.replace(/ฟ/g, '4');
    note = note.replace(/ซ/g, '5');
    note = note.replace(/ล/g, '6');
    note = note.replace(/ท/g, '7');
    note = note.replace(/ดํ/g, '8');
    note = note.replace(/รํ/g, '9');
    note = note.replace(/ํ/g, '*');
    note = note.replace(/ฺ/g, '.');
    // checkError()
    document.getElementById('txtinput').value = i[0] + ":" + note;
  }

  function changeText() {
    console.log(document.getElementById("btn1").innerText);
    if (document.getElementById("btn1").innerText === "ระบบ 1234") {
      document.getElementById("btn1").innerText = "ระบบ ดรมฟ";
      numberal();
    } else {
      document.getElementById("btn1").innerText = "ระบบ 1234";
      alphabet();
    }
  }

function convertTable() {
  //get text from textarea
  let inputText = document.getElementById("txtinput").value;

  //splite new line song name and melody
  let nameAndMelody = inputText.split(/:\n/g);
  const songName = nameAndMelody[0]

  //splite new line for only melody
  let newLineArr = nameAndMelody[1].split(/\n/g);
  console.log('NEWLINEARR', newLineArr)

  //find length
  let newLineArrLen = newLineArr.length;

  //make variable
  let HTMLTableOutput = "";

  // looping for create new line on display
  for (let i = 0; i < newLineArrLen; i++) {
    HTMLTableOutput += "<tr><td>" + newLineArr[i] + "</td></tr>" + "\n";
  }

  //get saparetor and make it regex pattern with global flag
  let sign = document.getElementById('sign').value
  let sigRegx = new RegExp(`${sign}`, "g")

  //replace saparetor with table tag form
  HTMLTableOutput = HTMLTableOutput.replace(sigRegx , "</td><td>");
  //replace empty line to new teble
  // HTMLTableOutput = HTMLTableOutput.replace(/<tr><td><\/td><\/tr>\n/gm, "");
  HTMLTableOutput = HTMLTableOutput.replace(/<tr><td><\/td><\/tr>\n/g, "</table>\n<br><table style=&#34width:100%&#34>\n");
  //no teble in ท่อน
  HTMLTableOutput = HTMLTableOutput.replace(/^(<tr><td>ท่อน<\/td><td>)(.*<\/td><\/tr>)/gm, "</table>\n$1 $2\n<table style=&#34width:100%&#34>\n");

  // สามชั้น
  HTMLTableOutput = HTMLTableOutput.replace(/^(<tr><td>สามชั้น<\/td><\/tr>)/gm, "</table>\n$1\n<table style=&#34width:100%&#34>\n");
  //สองชั้น
  HTMLTableOutput = HTMLTableOutput.replace(/^(<tr><td>สองชั้น<\/td><\/tr>)/gm, "</table>\n$1\n<table style=&#34width:100%&#34>\n");
  //ชั้นเดียว
  HTMLTableOutput = HTMLTableOutput.replace(/^(<tr><td>ชั้นเดียว<\/td><\/tr>)/gm, "</table>\n$1\n<table style=&#34width:100%&#34>\n");
  //delete empty table tag
  HTMLTableOutput = HTMLTableOutput.replace(/^<table style=&#34width:100%&#34>\n<\/table>/gm, "");

  if (HTMLTableOutput !== "<tr><td></td></tr>\n") {
    // document.getElementById("output").innerHTML = songName + "<br>" +
    //   "<table style=&#34width:100%&#34>\n" + HTMLTableOutput + "</table>";
      document.getElementById("outputTable").innerHTML = songName + "<br>" +
        "<table style=&#34width:100%&#34>\n" + HTMLTableOutput + "</table>";
        console.log('"<TABLE STYLE=&#34WIDTH:100%&#34>\\N" + HTMLTABLEOUTPUT + "</TABLE>"', "<table style=&#34width:100%&#34>\n" + HTMLTableOutput + "</table>")
  } else {
    console.log("empty data!");
  }
}

function copyFunction() {
  // Get the text field
  var copyText = document.getElementById("output");
  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
}

function clearFunction() {
  let x = document.getElementById("output");
  x = ""
  document.getElementById("output").innerHTML = x;
  document.getElementById("outputTable").innerHTML = x;
}

function addRowTextarea() {
      var lines = document.getElementById("txtinput").value.split(/\r\n|\r|\n/).length;
      console.log('LINES', lines)
      document.getElementById("txtinput").rows = lines;
    }
