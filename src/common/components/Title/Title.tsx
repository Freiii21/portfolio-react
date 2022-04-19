import s from './Title.module.scss'

type TitlePropsType = {
    value: string
}

export const Title = (props:TitlePropsType) => {
    return (
        <div className={s.title}>
            <h2>{props.value}</h2>
        </div>
    );
}