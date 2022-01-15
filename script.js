/**
 * Budget Calculator JavaScript code
 * (author Joshua Thomas)
 * date 15/01/2022
 * version:1.0
 */

//Grabbing the main elements of output and input
const output = document.getElementById('output');
const input = document.getElementById('input');

const sum1 = document.getElementById('sum1');
const name1 = document.getElementById('name1');
const price1 = document.getElementById('price1');
const output_info1 = document.getElementById('output_info1');
let sum1_total = 0;
let original_output_sum1 = 0;

const sum2 = document.getElementById('sum2');
const name2 = document.getElementById('name2');
const price2 = document.getElementById('price2');
const output_info2 = document.getElementById('output_info2');
let sum2_total = 0;
let original_output_sum2 = 0;

const sum3 = document.getElementById('sum3');
const name3 = document.getElementById('name3');
const price3 = document.getElementById('price3');
const output_info3 = document.getElementById('output_info3');
let sum3_total = 0;
let original_output_sum3 = 0;

const sum4 = document.getElementById('sum4');
const name4 = document.getElementById('name4');
const price4 = document.getElementById('price4');
const output_info4 = document.getElementById('output_info4');
let sum4_total = 0;
let original_output_sum4 = 0;

const sum5 = document.getElementById('sum5');
const name5 = document.getElementById('name5');
const price5 = document.getElementById('price5');
const output_info5 = document.getElementById('output_info5');
let sum5_total = 0;
let original_output_sum5 = 0;



const btn = document.getElementById('btn').addEventListener("click", (e)=>{
    output.value = input.value;
    original_output_sum1 = output.value;
    output.style.color = "black";
});

const add1 = document.getElementById('add1').addEventListener("click", (e)=>{
    if(output_info1.innerText !== ""){
        alert("Already Filled");
        return;
    }


    if((name1.value !== "") && (price1.value !== "") && (output.value !== "")){
        sum1_total = sum1_total + parseInt(price1.value);
        sum1.value = sum1_total;

        let p1_temp = price1.value;
        let temp = output.value;

        price1.value = "";
        
        output.value = temp - p1_temp;

        if(output.value < 1){
            alert("Under Budget with " + name1.value + " " +  p1_temp );
            sum1.value = "";
            output.style.color = "red";
            output.value = parseInt(output.value) + parseInt(p1_temp);
            return;

        }

        output_info1.innerHTML = "Name: " + name1.value + " Price: " + p1_temp + "<button id='del_btn1' class='del-btn1'>Delete</button>"; 

        const del_btn1 = document.getElementById('del_btn1').addEventListener("click", (e)=>{
            output_info1.innerHTML = "";
            output.value = parseInt(output.value) + parseInt(p1_temp);
            sum1.value = "";
        })
        
    }
})

const add2 = document.getElementById('add2').addEventListener("click", (e)=>{
    if(output_info2.innerText !== ""){
        alert("Already Filled");
        return;
    }

    if((name2.value !== "") && (price2.value !== "") && (output.value !== "")){
        sum2_total = sum2_total + parseInt(price2.value);
        sum2.value = sum2_total;

        let p2_temp = price2.value;
        let temp2 = output.value;

        price2.value = "";

        output.value = temp2 - p2_temp;

        if(output.value < 1){
            alert("Under Budget with " + name2.value + " " +  p2_temp );
            sum2.value = "";
            output.style.color = "red";
            output.value = parseInt(output.value) + parseInt(p2_temp);
            return;

        }
 
        output_info2.innerHTML = "Name: " + name2.value + " Price: " + p2_temp + "<button id='del_btn2' class='del-btn2'>Delete</button>"; 

        const del_btn2 = document.getElementById('del_btn2').addEventListener("click", (e)=>{
            output_info2.innerHTML = "";
            output.value = parseInt(output.value) + parseInt(p2_temp);
            sum2.value = "";
        })
        
    }
})

const add3 = document.getElementById('add3').addEventListener("click", (e)=>{
    if(output_info3.innerText !== ""){
        alert("Already Filled");
        return;
    }

    if((name3.value !== "") && (price3.value !== "") && (output.value !== "")){
        sum3_total = sum3_total + parseInt(price3.value);
        sum3.value = sum3_total;

        let p3_temp = price3.value;
        let temp3 = output.value;

        price3.value = "";

        output.value = temp3 - p3_temp;

        if(output.value < 1){
            alert("Under Budget with " + name3.value + " " +  p3_temp );
            sum3.value = "";
            output.style.color = "red";
            output.value = parseInt(output.value) + parseInt(p3_temp);
            return;

        }

        output_info3.innerHTML = "Name: " + name3.value + " Price: " + p3_temp + "<button id='del_btn3' class='del-btn3'>Delete</button>"; 

        const del_btn3 = document.getElementById('del_btn3').addEventListener("click", (e)=>{
            output_info3.innerHTML = "";
            output.value = parseInt(output.value) + parseInt(p3_temp);
            sum3.value = "";
        })
        
    }
})

const add4 = document.getElementById('add4').addEventListener("click", (e)=>{
    if(output_info4.innerText !== ""){
        alert("Already Filled");
        return;
    }

    if((name4.value !== "") && (price4.value !== "") && (output.value !== "")){
        sum4_total = sum4_total + parseInt(price4.value);
        sum4.value = sum4_total;

        let p4_temp = price4.value;
        let temp4 = output.value;

        price4.value = "";

        output.value = temp4 - p4_temp;

        if(output.value < 1){
            alert("Under Budget with " + name4.value + " " +  p4_temp );
            sum4.value = "";
            output.style.color = "red";
            output.value = parseInt(output.value) + parseInt(p4_temp);
            return;

        }

        output_info4.innerHTML = "Name: " + name4.value + " Price: " + p4_temp + "<button id='del_btn4' class='del-btn4'>Delete</button>"; 

        const del_btn4 = document.getElementById('del_btn4').addEventListener("click", (e)=>{
            output_info4.innerHTML = "";
            output.value = parseInt(output.value) + parseInt(p4_temp);
            sum4.value = "";
        })
        
    }
})

const add5 = document.getElementById('add5').addEventListener("click", (e)=>{
    if(output_info5.innerText !== ""){
        alert("Already Filled");
        return;
    }

    if((name5.value !== "") && (price5.value !== "") && (output.value !== "")){
        sum5_total = sum4_total + parseInt(price5.value);
        sum5.value = sum4_total;

        let p5_temp = price5.value;
        let temp5 = output.value;

        price4.value = "";

        output.value = temp5 - p5_temp;

        if(output.value < 1){
            alert("Under Budget with " + name5.value + " " +  p5_temp );
            sum5.value = "";
            output.style.color = "red";
            output.value = parseInt(output.value) + parseInt(p5_temp);
            return;

        }

        output_info5.innerHTML = "Name: " + name5.value + " Price: " + p5_temp + "<button id='del_btn5' class='del-btn5'>Delete</button>"; 

        const del_btn5 = document.getElementById('del_btn5').addEventListener("click", (e)=>{
            output_info5.innerHTML = "";
            output.value = parseInt(output.value) + parseInt(p5_temp);
            sum5.value = "";
        })
        
    }
})