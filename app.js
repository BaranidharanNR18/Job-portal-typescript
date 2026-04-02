var jobs = [
{
id:1,
title:"Frontend Developer",
company:"Google",
salary:"12 LPA",
location:"Bangalore",
role:"Developer",
logo:"https://logo.clearbit.com/google.com"
},
{
id:2,
title:"UI Designer",
company:"Microsoft",
salary:"10 LPA",
location:"Hyderabad",
role:"Designer",
logo:"https://logo.clearbit.com/microsoft.com"
},
{
id:3,
title:"Backend Developer",
company:"Amazon",
salary:"14 LPA",
location:"Chennai",
role:"Developer",
logo:"https://logo.clearbit.com/amazon.com"
},
{
id:4,
title:"Project Manager",
company:"Google",
salary:"16 LPA",
location:"Pune",
role:"Manager",
logo:"https://logo.clearbit.com/google.com"
},
{
id:5,
title:"Data Analyst",
company:"Microsoft",
salary:"11 LPA",
location:"Delhi",
role:"Developer",
logo:"https://logo.clearbit.com/microsoft.com"
},
{
id:6,
title:"Cloud Engineer",
company:"Amazon",
salary:"15 LPA",
location:"Mumbai",
role:"Developer",
logo:"https://logo.clearbit.com/amazon.com"
}
];

var savedJobs = [];

var jobContainer = document.getElementById("jobContainer");
var savedContainer = document.getElementById("savedJobs");
var searchInput = document.getElementById("search");
var companyFilter = document.getElementById("companyFilter");
var roleFilter = document.getElementById("roleFilter");

function renderJobs(jobList){

jobContainer.innerHTML="";

jobList.forEach(function(job){

var card=document.createElement("div");
card.className="job-card";

card.innerHTML=
'<img src="'+job.logo+'" class="logo">'+
'<h3>'+job.title+'</h3>'+
'<p><b>'+job.company+'</b></p>'+
'<p>'+job.salary+'</p>'+
'<p>'+job.location+'</p>'+
'<button onclick="saveJob('+job.id+')">Save Job</button>';

jobContainer.appendChild(card);

});

}

function renderSaved(){

savedContainer.innerHTML="";

savedJobs.forEach(function(job){

var card=document.createElement("div");
card.className="job-card";

card.innerHTML=
'<img src="'+job.logo+'" class="logo">'+
'<h3>'+job.title+'</h3>'+
'<p><b>'+job.company+'</b></p>'+
'<p>'+job.salary+'</p>'+
'<p>'+job.location+'</p>'+
'<button onclick="unsaveJob('+job.id+')">Unsave Job</button>';

savedContainer.appendChild(card);

});

}

function saveJob(id){

var index=jobs.findIndex(function(j){return j.id===id});

if(index!==-1){

var job=jobs.splice(index,1)[0];

savedJobs.push(job);

renderJobs(jobs);
renderSaved();

}

}

function unsaveJob(id){

var index=savedJobs.findIndex(function(j){return j.id===id});

if(index!==-1){

var job=savedJobs.splice(index,1)[0];

jobs.push(job);

renderJobs(jobs);
renderSaved();

}

}

function filterJobs(){

var search=searchInput.value.toLowerCase();
var company=companyFilter.value;
var role=roleFilter.value;

var filtered=jobs.filter(function(job){

return(
job.title.toLowerCase().includes(search) &&
(company=="" || job.company==company) &&
(role=="" || job.role==role)
);

});

renderJobs(filtered);

}

searchInput.addEventListener("input",filterJobs);
companyFilter.addEventListener("change",filterJobs);
roleFilter.addEventListener("change",filterJobs);

renderJobs(jobs);
