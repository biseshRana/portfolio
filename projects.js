import { fam } from './projectsArray.js';

export function bruh() 
{
    let projectsHTML = '';
    fam.forEach((project) => 
        {
            projectsHTML += 
            `
                <div class="container">
                    <div class="imageDiv imageDiv+${project.nameProject}">
                        <button class="hi" data-project-video="${project.video}"> <img class="playButton" src="images/play_button.png"> </button>
                        <img class="image" src="${project.image}"
                        data-project-id="${project.image}"
                        >
                    </div>
                    <div class="description">
                        <div class="subtitle">
                            ${project.nameProject}
                        </div>
                        <div>
                            ${project.description}
                        </div>
                    </div>
                </div>
            `;
        });
    document.querySelector('.list').innerHTML = projectsHTML;
    
}