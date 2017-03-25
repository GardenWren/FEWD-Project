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
    var navBar = $('#navbarinsert');
    //add about text to about section
    aboutTextContainer.append(data.aboutBlurb);
    //add portfolio data to portfolio html to portfolio section
    portfolioContainer.append(buildPortfolio(data)); 
});


//May provide this part.
function buildPortfolio(data){
 var portfolioHTML = "";
  data.portfolio.forEach(function(sectionData){
    portfolioHTML += buildPortfolioSection(sectionData);
  });
  console.log(portfolioHTML);
  return portfolioHTML;
  }


function buildPortfolioSection(sectionData) {
  var sectionHTML= '<div id="' + sectionData.sectionName + '">';
  sectionHTML=sectionHTML + '<div class="wrapper">';
  sectionHTML=sectionHTML + '<ul>';
  sectionData.sectionContent.forEach(function(projectData){
    
    sectionHTML += buildPortfolioProject(projectData);
    }
  );
  sectionHTML=sectionHTML + '</ul>';
  sectionHTML=sectionHTML + '</div>';
  sectionHTML += '</div>';
  return sectionHTML
}

function buildPortfolioProject(projectData){
 var projectHTML = '<li>';
 projectHTML += '<h2>' + projectData.projectName + '</h2>';
 projectHTML += '<p class="caption">' + projectData.statement + '</p>';
 projectData.imgList.forEach(function(imgData){
  projectHTML += buildImg(imgData);
 });
 projectHTML = projectHTML + '</li>';
 return projectHTML;
}

function buildImg(imgData){
 var imgHTML = '<a href="img/' + imgData.imgSource + '">';
 imgHTML += '<img src="img/' + imgData.imgSource + '" ';
 imgHTML += 'alt="' + imgData.imgText +'" class=" imgPortfolio"></a>';
 return imgHTML
}
