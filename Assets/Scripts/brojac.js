#pragma strict
var score: score;
var zavrsniTekst : GUIText;
var player2: GameObject;

var upgradeTime: int;
var upgradeSpawn: Transform[];
var upgrade: GameObject;
var time: int;

function Awake()
{
	upgradeTime = Time.time + 10;
	score = GameObject.Find("score").GetComponent("score");
	if (score.playerCount == 2)
		{
			var gliso2 : hodanje2 = player2.GetComponent("hodanje2");
			gliso2.enabled = true;
		}
	else
		{
			var glisoBot :hodanjeBot = player2.GetComponent("hodanjeBot");
			glisoBot.enabled = true;
		}
}

function Start ()
{
	guiText.pixelOffset.x = Screen.width/2 -50;
	guiText.pixelOffset.y = Screen.height/2 - 25;
}

function Update () 
{
	guiText.text = "Red: "+score.igrac1Kills+"\nBlue: "+score.igrac2Kills;
	
	if (Time.time > upgradeTime)
	{
		Destroy (GameObject.Find("patike(Clone)")); 
		var curentSpawn = upgradeSpawn[Random.Range(0,4)];
		Instantiate(upgrade, curentSpawn.position, upgrade.transform.rotation);
		upgradeTime = Time.time + 20;
	}
	
}

function Death ()
{	
	score.round ++;
	Prebaci();
}

function Prebaci()
{
	yield WaitForSeconds(1);
	zavrsniTekst.enabled = true;
	if (!(GameObject.Find("cica_gliso1")) && !(GameObject.Find("cica_gliso2")))
		zavrsniTekst.text = "Tie!";	
	else if (!(GameObject.Find("cica_gliso1")))
			zavrsniTekst.text = "Blue won!";
		else 
			zavrsniTekst.text = "Red won!";	
	yield WaitForSeconds(2);
	Application.LoadLevel(1);
	
}