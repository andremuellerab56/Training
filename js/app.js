$(window).load(function(){

    let education_list = {
        "H1": {
            company: "HSR Hochschule für Technik Rapperswil",
            course_name: "CAS Frontend Engineering",
            url: "https://www.hsr.ch/de/weiterbildung/technik-und-it/cas/cas-frontend-engineering/"},
        "B1": {
            company: "Berner Fachhochschule",
            course_name: "Applikationsentwicklung mit JavaScript und HTML5",
            url: "https://www.bfh.ch/de/weiterbildung/cas/applikationsentwicklung-javascript-html5/"},
        "F1": {
            company: "FHNW",
            course_name: "CAS Usability und User Experience",
            url: "https://uxschweiz.ch/weiterbildung/cas-fhnw/"},
        "D1": {
            company: "Digicomp Academy AG",
            course_name: "Einführung in Usability und User Experience (UX) («ERG»)",
            url: "https://www.digicomp.ch/weiterbildung/development-trainings/testing-ux-trainings/ux-trainings/kurs-einfuehrung-in-usability-und-user-experience-ux"},
        "W1": {
            company: "Web Professionals",
            course_name: "Web Developer",
            url: "https://web-professionals.ch/lehrgaenge/web-developer/"},
        "C1": {
            company: "Coursera Inc.",
            course_name: "Interaction Design Specialization",
            url: "https://www.coursera.org/browse/computer-science/design-and-product"},
        "U1": {
            company: "Udemy, Inc.",
            course_name: "Advanced CSS and Sass: Flexbox, Grid, Animations",
            url: "https://www.udemy.com/course/advanced-css-and-sass/?couponCode=LAUNCHSITE4"},
        "L1": {
            company: "LinkedIn Corporation",
            course_name: "UX Insights Weekly",
            url: "https://www.lynda.com/course-tutorials/UX-Insights-Weekly/5010648-2.html"},
        "I1": {
            company: "Informatikmittelschule IMS",
            course_name: "UInformatikmittelschule",
            url: "https://wg.edubs.ch/schulprofil/ims"},
        "H1": {
            company: "HSR Hochschule für Technik Rapperswil",
            course_name: "International Usability and User Experience Qualification Board",
            url: "https://uxschweiz.ch/weiterbildung/uxqb/"},
        "H1": {
            company: "HSR Hochschule für Technik Rapperswil",
            course_name: "MAS Human Computer Interaction Design",
            url: "https://uxschweiz.ch/weiterbildung/mashcid/"},



    }



    let wrapper = $('#wrapper'), container;
    for (let key in education_list){
        container = $('<div id="education_course" class="container"></div>');
        wrapper.append(container);
        container.append('<div class="company">' + education_list[key].company +'</div>');
        container.append('<div class="course_name">' + education_list[key].course_name +'</div>');
        container.append('<div class="url"><a href="' + education_list[key].url +'" target="_blank">' + education_list[key].company +'</a></div>');
    }

});


