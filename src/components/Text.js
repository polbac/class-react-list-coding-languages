
function Text({ body, danger, copy }) {

    return <p className={danger && 'danger'}>
        {body} 
        {copy && <span>©</span>}

    </p>
}

export default Text