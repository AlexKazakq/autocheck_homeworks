import s from './Loader.module.css'
import preload from './images/loader.svg'

export const Loader = () => <div className={s.loader}>
    <img src={preload}/>
</div>
