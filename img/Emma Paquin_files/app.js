// Store location of data
var portfolioData = 'https://raw.githubusercontent.com/GardenWren/FEWD-Project/master/img/portfolio.json';


//load data
$.ajax(portfolioData).done(function(data) { 
    data = JSON.parse(data);
    //Find portfolio section in index.html
    var portfolioContainer = $('#portfolio');
    //Find about section in index.html
    var aboutTextContainer = $('#abouttext');
    //Find navbarinsert in index.html
    var navBarInsert = $('#navbarinsert');
    //add sections from portfolio.json
    navBarInsert.after(buildNav(data));
    //add about text to about section
    aboutTextContainer.append(data.aboutBlurb);
    //add portfolio data to portfolio html to portfolio section
    portfolioContainer.append(buildPortfolio(data)); 
});


//Functions

//function to create full nav html from portfolio.json
function buildNav(data){
  var navHTML = "";
  data.portfolio.forEach(function(sectionData){
    navHTML += buildNavSection(sectionData);
  });
 return navHTML;
}


//function to create nav html for sections from portfolio.json
function buildNavSection(sectionData) {
  var navSectionName = sectionData.sectionName;
  var navSectionHTML ='<li><a href="#';
  navSectionHTML += navSectionName;
  navSectionHTML +='">' + navSectionName;
  navSectionHTML += '</a></li>';
  return navSectionHTML;
}

//function to add sections together into the full portfolio
function buildPortfolio(data){
 var portfolioHTML = "";
  data.portfolio.forEach(function(sectionData){
    portfolioHTML += buildPortfolioSection(sectionData);
  });
  console.log(portfolioHTML);
  return portfolioHTML;
  }

//function to create the uonorderd list that makes up each section of the portfollio
function buildPortfolioSection(sectionData) {
  var sectionHTML= '<div id="' + sectionData.sectionName + '">';
  sectionHTML +='<div class="wrapper">';
  sectionHTML += '<h2>' +sectionData.sectionName + '</h2>';
  sectionHTML += '<ul>';
  sectionData.sectionContent.forEach(function(projectData){
    
    sectionHTML += buildPortfolioProject(projectData);
    }
  );
  sectionHTML += '</ul>';
  sectionHTML += '</div>';
  sectionHTML += '</div>';
  return sectionHTML
}

//function to create the html to display 1 project
function buildPortfolioProject(projectData){
 var projectHTML = '<li>';
 projectHTML += '<h3>' + projectData.projectName + '</h3>';
 projectHTML += '<p class="caption">' + projectData.statement + '</p>';
 projectData.imgList.forEach(function(imgData){
  projectHTML += buildImg(imgData);
 });
 projectHTML += '</li>';
 return projectHTML;
}

//function to display an image in a project
function buildImg(imgData){
 var imgHTML = '<a href="img/' + imgData.imgSource + '">';
 imgHTML += '<img src="img/' + imgData.imgSource + '" ';
 imgHTML += 'alt="' + imgData.imgText +'" class=" imgPortfolio"></a>';
 return imgHTML
}
