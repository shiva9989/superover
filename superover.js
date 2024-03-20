var list=[0,1,2,3,4,6,'w'];
var wc =0;
var wc2 = 0
var ind1 = 1;
var ind2 = 1;
var t1score =0;
var t2score = 0;
var batting=["rcb","srh"];
var toss = Math.floor(Math.random()*2);
    console.log(batting[toss]);

            function superover() {
                if (batting[toss] == "rcb") {
                    document.getElementById("strike").value = "Rcb batting";
                    if (ind1 != 7 && wc != 2) {
                        var i = 'r' + ind1;
                        var i1 = Math.ceil(Math.random() * 6);
                        document.getElementById(i).innerHTML = list[i1];
                        if (list[i1] == 'w') {
                            wc++;
                            t2score = t2score + 0;
                        } else {
                            t1score = t1score + list[i1];
                        }
                        document.getElementById("t1score").innerHTML = t1score;
                        ind1 += 1;
                    } else if (t2score == 0) {
                        toss = 1; 
                        ind2 = 1;
                        wc2 = 0; 
                        superover(); 
                    }
                } else {
                    document.getElementById("strike").value = "Srh batting";
                    if (ind2 != 7 && wc2 != 2) {
                        var j = 's' + ind2;
                        var i2 = Math.ceil(Math.random() * 6);
                        document.getElementById(j).innerHTML = list[i2];
                        if (list[i2] == 'w') {
                            wc2++;
                            t2score = t2score + 0;
                        } else {
                            t2score = t2score + list[i2];
                        }
                        document.getElementById("t2score").innerHTML = t2score;
                        ind2 += 1;
                    } else if (t1score == 0) {
                        toss = 0; 
                        ind1 = 1;
                        wc = 0; 
                        superover(); 
                    }
                }
            
              
                if ((ind1 == 7 && ind2 == 7 ) || (wc==2||wc2==2)) {
                    document.getElementById("strike").value = "Innings complete";
                    if ( t1score > t2score) {
                        document.getElementById("result").textContent = "RCB won the Super Over!";
                        document.getElementById("result2").textContent = "E Saala Cup Namde!";
                    } else if (t2score > t1score) {
                        document.getElementById("result").textContent = "SRH won the Super Over!";
                        document.getElementById("result2").textContent = "";
                    } else {
                        document.getElementById("result").textContent = "Draw Match!";
                        document.getElementById("result2").textContent = "";
                    }
                }
}
            