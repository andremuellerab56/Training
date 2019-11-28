$(window).load(function() {
  let education_list = [];
  let companies = {};
  let i = Number;
  let iMax = Number;

  education_list = [
    {
      company: "HSR Hochschule für Technik Rapperswil",
      course_name: "CAS Frontend Engineering",
      url:
          "https://www.hsr.ch/de/weiterbildung/technik-und-it/cas/cas-frontend-engineering/"
    },
    {
      company: "Berner Fachhochschule",
      course_name: "Applikationsentwicklung mit JavaScript und HTML5",
      url:
          "https://www.bfh.ch/de/weiterbildung/cas/applikationsentwicklung-javascript-html5/"
    },
    {
      company: "FHNW",
      course_name: "CAS Usability und User Experience",
      url: "https://uxschweiz.ch/weiterbildung/cas-fhnw/"
    },
    {
      company: "Digicomp Academy AG",
      course_name: "Einführung in Usability und User Experience (UX) («ERG»)",
      url:
          "https://www.digicomp.ch/weiterbildung/development-trainings/testing-ux-trainings/ux-trainings/kurs-einfuehrung-in-usability-und-user-experience-ux"
    },
    {
      company: "Web Professionals",
      course_name: "Web Developer",
      url: "https://web-professionals.ch/lehrgaenge/web-developer/"
    },
    {
      company: "Informatikmittelschule IMS",
      course_name: "UInformatikmittelschule",
      url: "https://wg.edubs.ch/schulprofil/ims"
    },
    {
      company: "HSR Hochschule für Technik Rapperswil",
      course_name:
          "International Usability and User Experience Qualification Board",
      url: "https://uxschweiz.ch/weiterbildung/uxqb/"
    },
    {
      company: "HSR Hochschule für Technik Rapperswil",
      course_name: "MAS Human Computer Interaction Design",
      url: "https://uxschweiz.ch/weiterbildung/mashcid/"
    },
    {
      company: "SAE Institute AG",
      course_name: "Webdesign & Development Diploma",
      url: "https://www.sae.edu/che/de/web-diploma"
    },
    {
      company: "FHNW",
      course_name: "CAS Usability und User Experience erfolgreich umsetzen",
      url: "https://www.fhnw.ch/de/weiterbildung/psychologie/cas-usability-und-user-experience-erfolgreich-umsetzen"
    },
    {
      company: "HSR Hochschule für Technik Rapperswil",
      course_name: "CAS Frontend Engineering",
      url: "https://www.hsr.ch/de/weiterbildung/technik-und-it/cas/cas-frontend-engineering/"
    },
    {
      company: "Berner Fachhochschule",
      course_name: "CAS Mobile Application Development",
      url: "https://www.bfh.ch/de/weiterbildung/cas/mobile-application-development/"
    },
    {
      company: "Berner Fachhochschule",
      course_name: "CAS Applikationsentwicklung mit JavaScript und HTML5",
      url: "https://www.bfh.ch/de/weiterbildung/cas/applikationsentwicklung-javascript-html5/"
    }
  ];

  // Array nach key value company sortieren
  education_list = education_list.sort((a, b) => {
    return a.company.localeCompare(b.company);
  });

  // sortiertes Array ausgeben
  for (let i = 0, iMax = education_list.length; i < iMax; ++i) {
    let wrapper = $("#wrapper"),
        container;
    container = $('<div id="education_course_data" class="container"></div>');
    wrapper.append(container);
    container.append(
        '<div class="company">' + education_list[i].company + "</div>"
    );
    container.append(
        '<div class="course_name">' + education_list[i].course_name + "</div>"
    );
    container.append(
        '<div class="url"><a href="' +
        education_list[i].url +
        '" target="_blank">' +
        education_list[i].company +
        "</a></div>"
    );
  }
});
