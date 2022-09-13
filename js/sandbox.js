/*
    BAC À SABLE

    Version du 10/07/2015

    Copyright Vincent Mazet (vincent.mazet@unistra.fr), 2015.

    Les programmes Javascript fournis par l'intermédiaire de ces pages
    proposent des illustrations et des animations pédagogiques pour le
    traitement du signal, les communications numériques, etc.

    Ces programmes sont régis par la licence CeCILL-B soumise au droit français
    et respectant les principes de diffusion des logiciels libres. Vous pouvez
    utiliser, modifier et/ou redistribuer ce programme sous les conditions de
    a licence CeCILL-B telle que diffusée par le CEA, le CNRS et l'INRIA sur le
    site www.cecill.info.

    En contrepartie de l'accessibilité au code source et des droits de copie, de
    modification et de redistribution accordés par cette licence, il n'est
    offert aux utilisateurs qu'une garantie limitée. Pour les mêmes raisons,
     seule une responsabilité restreinte pèse sur l'auteur du programme, le
     titulaire des droits patrimoniaux et les concédants successifs.

    À cet égard, l'attention de l'utilisateur est attirée sur les risques
    associés au chargement, à l'utilisation, à la modification et/ou au
    développement et à la reproduction du logiciel par l'utilisateur étant donné
    sa spécificité de logiciel libre, qui peut le rendre complexe à manipuler et
    qui le réserve donc à des développeurs et des professionnels avertis
    possédant des connaissances informatiques approfondies. Les utilisateurs
    sont donc invités à charger et tester l'adéquation du logiciel à leurs
    besoins dans des conditions permettant d'assurer la sécurité de leurs
    systèmes et ou de leurs données et, plus généralement, à l'utiliser et
    l'exploiter dans les mêmes conditions de sécurité.

    Le fait que vous puissiez accéder à cet en-tête signifie que vous avez pris
    connaissance de la licence CeCILL-B, et que vous en avez accepté les termes.
*/

// ********************************************************************************************* //

// Closure inside loop :
// http://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example
// Alternative : remplacer var par let (utilisable dans EcmaScript 6)

// ********************************************************************************************* //

function init1()
{
  // Initialisation du div
  div = inidiv('sandbox1', 400, 100);
  div.style.border = "1px solid #e0e0e0";

  // Graphe
  g = Graph(div, 0, 0, 400, 100);
  g.xlim = [-1, color.length];
  g.ylim = [-0.2, 1.2];
  for (var i=0; i<color.length; i++)
  {
    g.lineWidth = 5;
    g.strokeStyle = color[i];
    g.plot([i, i], [0, 1])
  }
}

// ********************************************************************************************* //

function init2()
{
  // Initialisation du div
  div = inidiv('sandbox2', 400, 300);
  div.style.border = "1px solid #e0e0e0";

  // Liste des positions
  x = [50, 50, 200, 100, 180, 200, 220, 180, 200, 220, 180, 200, 220];
  y = [20, 50, 250, 250, 130, 130, 130, 150, 150, 150, 170, 170, 170];
  a = ["", "", "", "", "rb", "cb", "lb", "rm", "cm", "lm", "rt", "ct", "lt"];
  var i;

  // Graphe et fonction pour afficher les points
  g = Graph(div, 0, 0, 400, 300);
  function dot(x,y)
  {
    g.strokeStyle = color[3];
    g.beginPath();
    g.moveTo(x-4, y);
    g.lineTo(x+4, y);
    g.stroke();
    g.moveTo(x, y-4);
    g.lineTo(x, y+4);
    g.stroke();
    g.closePath();
  }

  // Label simple
  i = 0;
  Label(div, "Label(..., "+x[i]+", "+y[i]+")", x[i], y[i]);
  dot(x[i],y[i]);

  // Label avec couleur
  i = 1;
  o = Label(div, "Label(..., "+x[i]+", "+y[i]+", 'lt', color[5])", x[i], y[i], "lt", color[5]);
  dot(x[i],y[i]);

  // Label avec LaTeX
  i = 2;
  Label(div, "\\(e^{-j2\pi f t}\\)", x[i], y[i], "lb");
  dot(x[i],y[i]);

  // Changement de taille
  i = 3;
  o = Label(div, "*", x[i], y[i], "cm");
  o.style.fontSize = "64pt";
  o.style.left = (x[i]-o.clientWidth/2).toString() + 'px';
  o.style.top = (y[i]-o.clientHeight/2).toString() + 'px';
  dot(x[i],y[i]);

  // Autres Labels
  for(i=4; i<a.length; i++)
  {
    Label(div, a[i], x[i], y[i], a[i]);
    dot(x[i],y[i]);
  }
}

// ********************************************************************************************* //

function init3()
{
  // Initialisation du div
  var div = inidiv('sandbox3', 400, 40);
  div.style.border = "1px solid #e0e0e0";

  // Étiquette & barre de défilement
  var a = 0
  var lbl = Label(div, 'Valeur : ' + a, 10, 20, "lm");
  var sld = Slider(div, 150, 10, 240, -3, 3, a, 0.1, draw);

  // Évènement
  function draw()
  {
    a = parseFloat(sld.value);
    //a = Math.round(a*10) / 10;
    lbl.innerHTML = "Valeur : " + a.toString();
  }
}

// ********************************************************************************************* //

function init4()
{
  // Initialisation du div
  var div = inidiv('sandbox4', 400, 80);
  div.style.border = "1px solid #e0e0e0";

  // Éléments de la liste
  var liste = ['Gaussienne', 'Porte', 'Sinus', 'Dirac'];

  // Étiquette & liste déroulante
  var c = liste[0];
  var lbl = Label(div, 'Choix : ' + c, 10, 20, "lm");
  var slc = Select(div, 10, 40, 380, liste, choice);

  // Évènement
  function choice()
  {
    c = slc.value;
    lbl.innerHTML = "Choix : " + c;
  }
}

// ********************************************************************************************* //

function init5()
{
  // Initialisation du div
  var div = inidiv('sandbox5', 400, 70);
  div.style.border = "1px solid #e0e0e0";

  // Boutons
  var btn = Button(div, "Cliquez ici", 20, 20, 150, 30, "Infobulle", ajoute);
  var clear = Button(div, symbClear, 350, 20, 30, 30, "Effacer", supprime);
  var lbl = Label(div, txt, 190, 35, "lm");

  // Initialisation
  var txt = "";
  ajoute();

  // Évènement
  function ajoute()
  {
    txt = txt + "&#9733";
    lbl.innerHTML = txt;
  }

  // Évènement
  function supprime()
  {
    txt = "";
    lbl.innerHTML = txt;
  }
}

// ********************************************************************************************* //

function init6()
{
  // Initialisation du div
  var div = inidiv('sandbox6', 530, 210);
  div.style.border = "1px solid #e0e0e0";

  // Parabole
  var i, x = [], y = [];
  for(i=-1.5; i<=2.5; i=i+.1)
  {
    x.push(i);
    y.push(i*i);
  }

  // Graphe 1 : cadre
  var lbl1 = Label(div, "Cadre", 95, 180, "tc");
  var g1 = Graph(div, 20, 20, 150, 150);
  g1.xlim = [-1.5, 2.5];
  g1.ylim = [-1.5, 2.5];
  g1.box(color[3]);
  g1.lineWidth = 2;
  g1.strokeStyle = color[1];
  g1.plot(x, y);

  // Graphe 2 : grille
  var lbl1 = Label(div, "Grille", 265, 180, "tc");
  var g2 = Graph(div, 190, 20, 150, 150);
  g2.xlim = [-1.5, 2.5];
  g2.ylim = [-1.5, 2.5];
  g2.grid(1, 0.3, color[4]);
  g2.lineWidth = 2;
  g2.strokeStyle = color[1];
  g2.plot(x, y);

  // Graphe 3 : axes
  var lbl1 = Label(div, "Axes", 435, 180, "tc");
  var g3 = Graph(div, 360, 20, 150, 150);
  g3.xlim = [-1.5, 2.5];
  g3.ylim = [-1.5, 2.5];
  g3.axes(color[5]);
  g3.lineWidth = 2;
  g3.strokeStyle = color[1];
  g3.plot(x, y);
}

// ********************************************************************************************* //

function init7()
{
    // Initialisation du div
    var div = inidiv('sandbox7', 430, 350);
    div.style.border = "1px solid #e0e0e0";

    // Graphe et boutons
    var g = Graph(div, 20, 20, 390, 260);
    g.xlim = [-10, 10];
    g.ylim = [-2, 2];
    var btn1 = Button(div, "Cadre",      20, 300, 90, 30, "Affiche le cadre et les axes", plotBox);
    var btn2 = Button(div, "Sinus",     120, 300, 90, 30, "Représenter un sinus",         plotSin);
    var btn3 = Button(div, "Hyperbole", 220, 300, 90, 30, "Représenter une hyperbole",    plotHyp);
    var btn0 = Button(div, "Effacer",   320, 300, 90, 30, "Effacer le graphe",            clearGraph);

    // Efface le graphe
    function clearGraph()
    {
        g.clear();
    }

    // Affiche le cadre et les axes
    function plotBox()
    {
        g.box();
        g.axes();
    }

    // Trace un sinus
    function plotSin()
    {
        var i, x = [], y = [];
        for(i=-10; i<=10; i=i+1)
        {
            x.push(i);
            y.push( Math.sin(i*0.62831) );
        }
        g.lineWidth = 1.5;
        g.strokeStyle = color[3];
        g.fillStyle = color[3];
        g.stem(x, y);
  }

  // Trace une hyperbole
  function plotHyp()
{
      var i, x = [], y = [];
      for(i=-10; i<=10; i=i+.1)
      {
          x.push(i);
          y.push( Math.pow(i/3,3) - i/3 );
      }
      g.lineWidth = 2;
      g.strokeStyle = color[4];
      g.plot(x, y);
  }
}

// ********************************************************************************************* //

function init8()
{
    // Initialisation du div
    var div = inidiv('sandbox8', 400, 300);
    div.style.border = "1px solid #e0e0e0";

    // Graphe
    var g = Graph(div, 20, 20, 360, 260);
    g.mouseMove(point);
    g.mouseDrag(droite);

    // Initialisation
    var a; // Pente de la droite
    droite(-10, 0);

    // Représente un point à l'emplacement du pointeur
    function point(x, y)
    {
        // Axes et cadre
        g.clear();
        g.box();
        g.axes();

        // Ligne et point
        g.lineWidth = 2;
        g.strokeStyle = color[3];
        g.fillStyle = color[5];
        g.plot([-1, 1], [-a, a]);
        g.dot(x, y, 5);
    }

    // Représente une droite dont la pente est déterminée grâce à la position du pointeur
    function droite(x, y)
    {
        // Calcul de la pente
        a = x!=0 ? y/x : 1e3;

        // Axes et cadre
        g.clear();
        g.box();
        g.axes();

        // Ligne et point
        g.lineWidth = 2;
        g.strokeStyle = color[3];
        g.fillStyle = color[4];
        g.plot([-1, 1], [-a, a]);
        g.dot(x, y, 5);
    }
}

// ********************************************************************************************* //

function init9()
{
  var symb = "&#9827; ";

  // Initialisation du div
  var div = inidiv('sandbox9', 400, 270);
  div.style.border = "1px solid #e0e0e0";

  // Affiche plusieurs contrôles
  var i, I = 5;
  var txt = [], btn = [], clear = [], lbl = [];
  for (i=0; i<I; i++)
  {
    txt[i] = Array(i+2).join(symb);
    btn[i] = Button(div, "Ligne " + (i+1).toString(), 20, 20+50*i, 150, 30, "Infobulle", ajoute(i));
    clear[i] = Button(div, symbClear, 350, 20+50*i, 30, 30, "Effacer", supprime(i));
    lbl[i] = Label(div, txt[i], 190, 35+50*i, "lm");
  }

  // Évènement
  function ajoute(i)
  {
    return function()
    {
      txt[i] = txt[i] + symb;
      lbl[i].innerHTML = txt[i];
    }
  }

  // Évènement
  function supprime(i)
  {
    return function()
    {
      txt[i] = "";
      lbl[i].innerHTML = txt[i];
    }
  }
}

// ********************************************************************************************* //

// Objets
var div, g = [], g1, g2, g3, btnclear;

// Paramètres
var xmax = 5;       // Valeurs extrême des abscisses
var A = 1;          // Amplitude de x(t)
var aa = 1.5;        // Demi-durée de x(t)
var B = 1;          // Amplitude de y(t)
var b = 1;          // Demi-durée de y(t)
var d = -4;         // Actuel décalage (en point)
var dpx, odpx;      // Actuel et ancien décalages (en pixel)

// Taille des graphiques
var gw = 350;       // Largeur d'un graphe
var gh = 80;        // Hauteur d'un graphe
var gs = 15;        // Espacement entre les graphes

// Abscisse pour le signal z(t) (résultat de la convolution)
var t = new Array(gw), z = new Array(gw);
for( i = 0 ; i < gw+1 ; i++ )
    t[i] = i / gw * 2 * xmax - xmax;


// ********************************************************************************************* //


window.onload = function (){
  init1();
  init2();
  init3();
  init4();
  init5();
  init6();
  init7();
  init8();
  init9();
}
