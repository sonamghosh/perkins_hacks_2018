using System;
using System.Speech.Recognition;
using System.Speech.Synthesis;
using System.Windows.Forms;
namespace WindowsFormsApp3
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        SpeechSynthesizer speechSynthesizerObj;
        SpeechRecognitionEngine recognizer = new SpeechRecognitionEngine();
        private void Form1_Load(object sender, EventArgs e)
        {
            SpeechRecognitionEngine sRecognize = new SpeechRecognitionEngine();
            Choices sList = new Choices();
            sList.Add(new string[] {
                "light on",
                "light off", "apple", "banana", "camel", "rat", "man", "one", "two", "three", "four", "five"
            });
            Grammar gr = new Grammar(new GrammarBuilder(sList));
            try
            {
                sRecognize.RequestRecognizerUpdate();
                sRecognize.LoadGrammar(gr);
                sRecognize.SpeechRecognized += sRecognize_SpeechRecognized;
                sRecognize.SetInputToDefaultAudioDevice();
                sRecognize.RecognizeAsync(RecognizeMode.Multiple);
                sRecognize.Recognize();
            }
            catch
            {
                return;
            }
        }
        private void sRecognize_SpeechRecognized(object sender, SpeechRecognizedEventArgs e)
        {
            {
                if (e.Result.Text == "apple")
                {
                    serialPort1.Open();
                    serialPort1.Write("a"); //send a to Arduino  
                    serialPort1.Close();
                }
                else if (e.Result.Text == "camel")
                {
                    serialPort1.Open();
                    serialPort1.Write("b"); //send b to Arduino  
                    serialPort1.Close();
                }
                else if (e.Result.Text == "rat")
                {
                    serialPort1.Open();
                    serialPort1.Write("c"); // send c to Arduino
                    serialPort1.Close();
                }
                else if (e.Result.Text == "one")
                {
                    serialPort1.Open();
                    serialPort1.Write("d"); // Send d to arduino
                    serialPort1.Close();
                }
                else if (e.Result.Text == "two")
                {
                    serialPort1.Open();
                    serialPort1.Write("e"); // send e to arduino
                    serialPort1.Close();
                }
                else if (e.Result.Text == "three")
                {
                    serialPort1.Open();
                    serialPort1.Write("f"); // send f to arduino
                    serialPort1.Close();
                }
                else if (e.Result.Text == "four")
                {
                    serialPort1.Open();
                    serialPort1.Write("g"); // send g to arduino
                    serialPort1.Close();
                }
                else if (e.Result.Text == "five")
                {
                    serialPort1.Open();
                    serialPort1.Write("h"); // send h to arduino
                    serialPort1.Close();
                }

            }
        }
    }
}
