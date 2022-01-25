import s from './Projects.module.css'
import sc from './../common/styles/Container.module.css'
import {Project} from './project/Project';

export const Projects = () => {
    return (
        <div className={s.projects}>
            <div className={`${sc.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>Projects</h2>
                <div className={s.projectsSet}>
                    <Project title='Counter' description='Does somethings...'/>
                    <Project title='Social network' description='Connects people...'/>
                </div>
            </div>
        </div>
    );
}