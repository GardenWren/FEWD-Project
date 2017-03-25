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
    var navBar = $('#navbarinsert')
    //add about text to about section
    aboutTextContainer.append(data.aboutBlurb);
    //add portfolio data to portfolio html to portfolio section
    portfolioContainer.append(buildPortfolio(data)) 
});


//May provide this part.
function buildPortfolo


function buildPortfolioSection(sectionData) {
 return sectionHTML
}

<section id="painting">
    <div class="wrapper">
      <ul>
        <li>
          <a href="img/babe.jpg"><img src="img/babe.jpg" alt="painting of father and new born son" class="painting img"></a>
          <p class="caption">My sister Emma is a wonderful artist and I can not say enough about her work</p>
        </li>
        <li>
          <a href="img/ione.jpg"><img src="img/ione.jpg" alt="painting and book page of aging woman" class="painting img"></a>
          <p class="caption">My sister Emma is a wonderful artist and I can not say enough about her work</p>
        </li>
        <li>
          <a href="img/invisible.jpg"><img src="img/invisible.jpg" alt="mind map with paintings" class="painting img"></a>
          <p class="caption">My sister Emma is a wonderful artist and I can not say enough about her work</p>
        </li>
      </ul>
    </div>
  </section>\\