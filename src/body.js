import './body.css'
export function Body() {
    return (
        <div class="content" style={{ "background-color": "blue" }}>
            <div class="content-left" style={{ "margin-left": '100px', "margin-top": '100px' }}>
                <p style={{ "color": "white" }}><h1><b>Move Work</b></h1>
                    <h1><b>Forward</b></h1>
                    Atlassian helps teams work smarter and faster together
                </p>
                <button type="button" style={{
                    "margin-left": '10px',
                    "height": '60px',
                    "width": '170px',
                    "background-color": "yellow",
                    "color":"black"
                }}>Learn More</button>
            </div>
            <div class="content-right" style={{ "margin-left": '310px' }}>
                <img src={"https://images.ctfassets.net/8fl1jrx919na/hrePDbERqEYBOTaXk2Io3/05869409b2cafcd3fa11eb17e0414c9a/atlassian_integration.png?w=950&h=632&q=80&fm=png"} alt="atlassian image" height="511px" width="600px"></img>
            </div>
        </div>
    )
}