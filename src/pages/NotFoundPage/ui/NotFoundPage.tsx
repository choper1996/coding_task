import { classNames } from 'shared/lib';
import cls from './NotFoundPage.module.scss';

const NotFoundPage = () => (
    <div className={classNames(cls.NotFoundPage)}>
        Page is not found
    </div>
);

export default NotFoundPage;
