import s from './Projects.module.scss'
import sc from './../common/styles/Container.module.scss'
import {Project} from './project/Project';
import {Title} from '../common/components/Title';
import counter from '../assets/images/counter.jpg'


export const Projects = () => {
    const counterStyle = {
        backgroundImage: `url(${counter})`
    };


    return (
        <div className={s.projects}>
            <div className={`${sc.container} ${s.projectsContainer}`}>
                <Title value={"Projects"}/>
                <div className={s.projectsSet}>
                    <Project style={counterStyle} title='Cards' description='Does somethings...'/>
                    <Project style={counterStyle} title='Todolist' description='Does somethings...'/>
                    <Project style={counterStyle} title='Counter' description='Does somethings...'/>
                    <Project style={counterStyle} title='Social network' description='Connects people...'/>
                </div>
            </div>
        </div>
    );
}