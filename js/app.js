// Store location of data
var portfolioData = 'https://raw.githubusercontent.com/GardenWren/FEWD-Project/master/img/portfolio.json';


//load data
$.ajax(portfolioData).done(function(data) {
    console.log(data.aboutBlurb);
    //Find portfolio section in index.html
    var portfolioContainer = $('#portfolio');
    //Find about section in index.html
    var aboutTextContainer = $('#abouttext');
    //add about text to about section
    aboutTextContainer.append(data.about);
 
});


//May provide this part.
function buildPortfolio(section) {
 
}