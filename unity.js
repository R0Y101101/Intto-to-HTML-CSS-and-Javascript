#pragma strict

function start () {

}

function Update () {


    if(Input.GetKey(KeyCode.R))
    (
        Debug.Log("Player select Rock");
    )

    if(Input.GetKeyDown(KeyCode.P))
    (
        Debug.Log("Player select Paper");
    )

    if(Input.GetKeyUp(KeyCode.S))
    (
        Debug.Log("Player select Scizzor");
    )
}