function introductionWithLanguageOptional(name, language = "JavaScript") {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);

  }
  
  console.log (introductionWithLanguageOptional("Monica"));


  
  function introduction(name) {
    console.log(`Hi, my name is ${name}.`);
    return(`Hi, my name is ${name}.`)
    }
    
    introduction("joe");
    introduction("jane");


    function introductionWithLanguage(name, language) {
        return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
    
      }
      
      console.log (introductionWithLanguage("Monica", "Javascript"));
    
    