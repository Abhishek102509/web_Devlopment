

function MsgBox({userName,textColor}){
    let styles={color: textColor};
    return(
        <div>
            <h4 style={styles}>Hello {userName}</h4>
        </div>
    )

}
export default MsgBox;