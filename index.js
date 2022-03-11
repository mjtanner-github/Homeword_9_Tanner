const inquirer = require('inquirer');
const fs = require('fs');
//const { title, features } = require('process');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter a title for your project:',
    },
    {
      type: 'editor',
      name: 'description',
      message: 'Enter a short, concise description of your project:',
    },
    {
      type: 'editor',
      name: 'motivation',
      message: 'Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:\n\n- What was your motivation?\n- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")\n- What problem does it solve?\n- What did you learn?'
    },
    {
      type: 'checkbox',
      name: 'table_of_contents',
      message: 'Check all elements to be included in your Table of Contents. (Space to Select, Up/Down Arrow, Enter) (Optional)',
      choices: ["Installation","Usage","Credits","Attributions","Tutorials","License","Badges","Features","Contribute","Tests"],

    },
    {
      type: 'editor',
      name: 'installation',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
    },
    {
      type: 'input',
      name: 'screenshot0',
      message: 'To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the file name, add it to your README file here. Do you wish to add a photo this section? (`Enter` to Escape)'
    },
    {
      type: 'editor',
      name: 'usage',
      message: 'Provide instructions and examples for use. Include screenshots as needed.'
    },
    {
      type: 'input',
      name: 'screenshot1',
      message: 'To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the file name, add it to your README file here. Do you wish to add a photo this section? (`Enter` to Escape)'
    },
    {
      type: 'input',
      name: 'collaborators',
      message: "List your collaborators, if any, with links to their GitHub profiles."
    },
    {
      type: 'input',
      name: 'attributions',
      message: 'If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.'
    },
    {   
    type: 'input',
      name: 'tutorials',
      message: 'If you followed tutorials, include links to those here as well.'
    },    
    {
      type: 'editor',
      name: 'license',
      message: 'The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).'
    },
    {
      type: 'input',
      name: 'badges',
      message: "Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you''re doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time."
    },
    {
      type: 'input',
      name: 'features',
      message: 'If your project has a lot of features, list them here.'
    },
    {
      type: 'input',
      name: 'screenshot2',
      message: 'To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the file name, add it to your README file here. Do you wish to add a photo this section? (`Enter` to Escape)'
    },
    {
      type: 'input',
      name: 'contribute',
      message: "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer:"
    },
    {
      type: 'editor',
      name: 'tests',
      message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here:'
    }
  ]);
};



generateMD = ({title,description,motivation,table_of_contents,installation,screenshot0,usage,screenshot1,collaborators,attributions,tutorials,license,badges,features,screenshot2,contribute,tests}) => {
  let readmeAssmbler = "";
  if(title.length>0) readmeAssmbler += `# ${title}`;
  if(description.length>0) readmeAssmbler += `\n## Description\n${description}`;
  if(motivation.length>0) readmeAssmbler += `\n## Movitavtion\n${motivation}`;
  if(table_of_contents.length>0){
    readmeAssmbler += `\n## Table of Contents\n`;
    for(let i = 0; i < table_of_contents.length; i++){
    readmeAssmbler += `[${table_of_contents[i]}](#${table_of_contents[i].toLowerCase()}) \n\n `;
    }
  }   
  if(installation.length>0) readmeAssmbler += `\n## Installation\n${installation}\n`;
  if(screenshot0.length>0) readmeAssmbler += `\n![alt text](./assets/images/${screenshot0})\n`;
  if(usage.length>0) readmeAssmbler += `\n## Usage\n${usage}\n`;
  if(screenshot1.length>0) readmeAssmbler +=  `\n![alt text](./assets/images/${screenshot1})\n`;
  if(collaborators.length>0) readmeAssmbler += `\n## Credits\n${collaborators}\n`;
  if(attributions.length>0) readmeAssmbler += `\n## Attribtutions\n${attributions}\n`;
  if(tutorials.length>0) readmeAssmbler += `\n## Tutorials\n${tutorials}\n`;
  if(license.length>0) readmeAssmbler += `\n## License\n${license}\n`;
  if(badges.length>0) readmeAssmbler += `\n## Badges\n${badges}\n`;
  if(features.length>0) readmeAssmbler += `\n## Features\n${features}\n`;
  if(screenshot2.length>0) readmeAssmbler +=  `\n![alt text](./assets/images/${screenshot2})\n`;
  if(contribute.length>0) readmeAssmbler += `\n## Contribute\n${contribute}\n`;
  if(tests.length>0) readmeAssmbler += `\n## Tests\n${tests}\n`;

  return(readmeAssmbler);
}

const init = () => {
  promptUser()
    .then((answers) => fs.writeFileSync('README.md', generateMD(answers)))
    .then(() => console.log('Successfully wrote to README.md.'))
    .catch((err) => console.error(err));
};


init();
