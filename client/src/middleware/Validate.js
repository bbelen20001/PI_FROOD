function Validate(input) {
    let errors = {};
    if (!input.title) {
      errors.title = "The name is required.";
    }
    if (!/^[a-zA-Z ]+$/.test(input.title)) {
      errors.title= "The title requires letters";
    }
    if (input.title.length <= 2 || input.title.length >= 20) {
      errors.title = "The title requires from 2 to 20 letters.";
    }
  
    if (!input.summary) {
      errors.summary = "The summary is required.";
    } else if (input.summary.length <= 2 || input.summary.length >= 300) {
      errors.summary = "The summary requires from 2 to 200 letters.";
    }
  
    if (input.healthScore < 1 || input.healthScore > 100) {
      errors.healthScore = "The score must be a number between 1 and 100.";
    }

  
    return errors;
  }

export default Validate;
