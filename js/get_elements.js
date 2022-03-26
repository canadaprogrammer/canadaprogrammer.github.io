const getSection = function (url, ele) {
  fetch(url)
    .then((response) => {
      return response.text();
    })
    .then((body) => {
      document.querySelector(ele).innerHTML = body;
    })
    .catch((err) => {
      console.error(err);
    });
};
getSection('/views/header.html', 'header');
// getSection('/views/home.html', '#home');
getSection('/views/about.html', '#about');
getSection('/views/experience.html', '#experience');
getSection('/views/portfolio.html', '#portfolio');
// getSection('/views/contact.html', '#contact');
// getSection('/views/footer.html', 'footer');
// getSection('/views/resume.html', '#resume');
// getSection('/views/case_studies.html', '#case_studies');
