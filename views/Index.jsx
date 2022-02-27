const React=require('react')
const Default=require('./layout/Default.jsx')
class Index extends React.Component {
    render(){
        const logs=this.props.logs
        return(
            <Default title="Index Page">
            <div>
            
            <nav>
                <a href="/logs/new">Go to Create a new Log</a>
            </nav>
            <ul>
                {
                    logs.map((log)=>{
                        <li key={`${log._id}`}>
                            <a href={`/logs/${log._id}`}>{log.title}</a>{log.entry}
                            <form action={`/logs/${log._id}?_method=DELETE`} method='POST'>
                                <input type="submit" value={`DELETE ${log.title}`} />

                            </form>
                            </li>
                    })
                }
            </ul>
            </div>
            </Default>
        )
}
    
}


module.exports=Index;