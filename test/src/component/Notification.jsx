import React from "react";

const styles = 
    {
        wrapper : 
        {
            margin : 8,
            padding : 8,
            display : 'flex',
            flexDirection : 'row',
            border : '1px solid gray',
            borderRadius : 16
        },
        messageText : 
        {
            color:'blue',
            fontSize:24
        }
    }

class Notification extends React.Component {

    

    constructor(props){
        super(props)
        
    }

    componentDidMount(){
        console.log('componentDidMount() call !!!')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate() call !!!');
    }

    componentWillUnmount(){
        // const checked : 
        console.log('componentWillUnmount() call !!!');
    }

    render() {
        return (
            <div style = {styles.wrapper}>
                <span style = {styles.messageText}> {this.props.message} </span>
            </div>
        )
    }

}

export default Notification;