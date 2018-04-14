const int pinButton = 8;                        // pin of button define here
const int pinLed    = 4;                        // pin of blue led
const int pinTouch = 2; // pin of led of touch sensor


const int pinLed_2 = 6;   // red led
const int pinTouch_2 = 5;  // red led button

// Testing Sound Sensor
const int pinAdc = A1;
boolean switcher = true;
int soundReading = 0;
int soundThreshold = 500;
char incomingData;
const int pinLed_green = 7;
int blinky = 500;  // ms

void setup()
{
    pinMode(pinButton, INPUT);                  // set button INPUT
    pinMode(pinLed, OUTPUT);                    // set led OUTPUT
    pinMode(pinTouch, INPUT);

    pinMode(pinLed_2, OUTPUT);
    pinMode(pinTouch_2, INPUT);

    // Sound Sensor Stuff
    pinMode(pinAdc, INPUT);  // for blue boi
    pinMode(pinLed_green, OUTPUT); // green boi
    //Serial.begin(115200);
    Serial.begin(9600);
    
}

// Turns off alll Leds if touched
void touchTurnOff()
{
  if (digitalRead(pinTouch)) {
    digitalWrite(pinLed, LOW);
    digitalWrite(pinLed_2, LOW);
    digitalWrite(pinLed_green, LOW);
  }
}


void loop()
{   
    /**
    digitalWrite(pinLed, HIGH);
    delay(500);
    digitalWrite(pinLed, LOW);
    delay(500);
    */
    
    
    if(digitalRead(pinButton))                     // when button is pressed
    {
        digitalWrite(pinLed, HIGH);             // led on
    }
    else if (digitalRead(pinTouch)){
      digitalWrite(pinLed, HIGH);
    }
    else
    {
        digitalWrite(pinLed, LOW);
    }


    if (digitalRead(pinTouch_2)) {
      digitalWrite(pinLed_2, HIGH);
    }
    else {
      digitalWrite(pinLed_2, LOW);
    }
    
    // Sensor Stuff
    soundReading = analogRead(pinAdc);
    if (soundReading > soundThreshold)
    {
      digitalWrite(pinLed, HIGH);
    }
    else {
      digitalWrite(pinLed, LOW);
    }
    // Turning on the green LED via speech commands
    // Green Blue Red  speeds 1 to 7 , lights in Binary
    /**
     * G B R
     * 0 0 1      Speed - 1
     * 0 1 0      Speed - 2
     * 0 1 1      Speed - 3
     * 1 0 0      Speed - 4
     * 1 0 1      Speed - 5
     * 1 1 0      Speed - 6
     * 1 1 1      Speed - 7
     */
     // Due to technical complications with light intensity the next thing will be blinking
     // Speeds 1 - 5 on Green LED only, Speed number corresponds to number of blinks
    incomingData = Serial.read(); {
    if (incomingData == 'a') {
      digitalWrite(pinLed_green, HIGH);
    } else if (incomingData == 'b') {
      digitalWrite(pinLed_green, LOW);
    } else if (incomingData == 'c') {  // blink twice
      digitalWrite(pinLed_green, HIGH);
      delay(400);
      digitalWrite(pinLed_green, LOW);
      delay(100);
      digitalWrite(pinLed_green, HIGH);
      delay(500);
      digitalWrite(pinLed_green, LOW);
      delay(1000);
    } else if (incomingData == 'd') { // speed 1
      incSpeed(1, blinky);
    } else if (incomingData == 'e') { // speed 2
      incSpeed(2, blinky);
    } else if (incomingData == 'f') { // speed 3
      incSpeed(3, blinky);
    } else if (incomingData == 'g') { // speed 4
      incSpeed(4, blinky);
    } else if (incomingData == 'h') { // speed 5
      incSpeed(5, blinky);
    }

     
    }

    /**
    long sum = 0;
    for (int i = 0; i<32; i++)
    {
      sum += analogRead(pinAdc);
    }
    sum >>=5;
    Serial.println(sum);
    
    
    delay(10);
    */
   
}

void incSpeed(int repeats, int time)
{
  for (int i = 0; i < repeats; i++)
  {
    digitalWrite(pinLed_green, HIGH);
    delay(time);
    digitalWrite(pinLed_green, LOW);
    delay(time);
  }
}




