import './Heaing.css';

const Heading = ({children, type='h2', classNames=[], ...props}) => {
    const Tag = type
    return <Tag
        {...props}
        className={['heading', ...classNames].join(' ')}
    >
        {children}
    </Tag>
}


export default Heading