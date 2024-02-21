# Learning JavaScript

Before execute JavaScript we need to install node.js in machine first


## Installation

Install node.js in computer

```bash
https://nodejs.org/
```
Cheat sheet <a href="https://docs.google.com/document/d/167IRWkBE4F1IOebB2pc4FdUcppPGUpvl_gqIJb-pWWA/edit?usp=sharing"> link </a>
--------------------------------------------------------------------------------------------------------------------------
# JavaScript

JavaScript is a scripting language that is used to make web pages interactive.

- JS is case sensitive in variable name!

**Comment (like in C):** // For single line (Tell JS to ignore the text on the current line)

/\* For

multiple line \*/

**Variable:**

- var: Can declare multiple time in a code
  - var a = 5;
  - var a = 6;
- let: Can declare once in a code
  - let b = 45;
  - let b = 12; //Error!
- const: **Read-only** variable (Can’t be reassigned)
  - const NAME= “Mark”; //Most developer use all uppercase in cost value.
  - NAME = “Mo”; //Error

**data type →**undefined, null, boolean, string, symbol, bigint, number and object

- **Sting**: Can use both ‘ ’ and “ “
  - If want to print with double quote use \” <Text> \” **OR** use single quote and double quote
    - const example = “Hello my name is \”Mark\”.“;
      - Hello my name is “Mark”.
    - const example = ‘Hello my name is “Mark”. ‘;
- Escape sequence:

![](Aspose.Words.d93b5135-9475-43a0-ac17-0778ad5fe611.001.png)

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";![](Aspose.Words.d93b5135-9475-43a0-ac17-0778ad5fe611.002.png)

- Output

  FirstLine

\SecondLine

ThirdLine

- Concatenating string with Plus operator:
  - “String1” + “String2”
    - const myStr = "This is the start." + " This is the end.";
      - **Output:** This is the start. This is the end.
  - String 1 += String2; == “String1” + “String2”

![](Aspose.Words.d93b5135-9475-43a0-ac17-0778ad5fe611.003.png)

- Constructing Strings with Variables

![](Aspose.Words.d93b5135-9475-43a0-ac17-0778ad5fe611.004.png)

**Uninitialized Variable:**

- Do some mathematical operation to “undefined” = NaN (Not a number)
- Concatenate String with “undefined” = undefined

**Mathematical Operation**

- Addition: +
  - const myVar = 16 + 2;
- Subtraction: -
  - const myVar = 16 - 2;
- Multiplication: \*
  - const myVar = 16 \* 2;
- Division: /
  - const myVar = 16 / 2;
- Increment a number: ++
  - i++ **==** i = i +1
- Decrement a number: --
  - i-- **==** i = i -1
- Remainder: % (Can check even or odd)
  - const 6%4 = 2
- Compound assignment with addition: +=
  - X += 5 == X = X + 5;
- Compound assignment with subtraction: -=
  - X -= 5 == X = X - 5
- Compound assignment with multiplication: \*=
  - X \*= 5== X = X \* 5;
- Compound assignment with division: /=
  - X -= 5 == X = X - 5

**Function**

- **Array Methode function**

  - **Map():** array.map(function(currentValue, index, arr), thisValue)

    array: Array ที่จะวนลูป

    currentValue: current value ตอนนั่น

    index: index ของcurrentValue

    arr: array ที่เก็บ (โชว์ทุกตัวใน array) thisValue: ฟังชั่นที่เอาไว้ทํากับ currentValue

- **Filter():** array.filter(function(currentValue, index, arr), thisValue)

  Same as map() but mostly used for filtering the value

Ex: countryLists.filter((country) => { country === “Thailand” } ); //โชว์เฉพาะThailand

- **forEach():** array.filter(function(currentValue, index, arr), thisValue)

  It is the same as map() but faster than. Also, forEach can’t return any

value.

![](Aspose.Words.d93b5135-9475-43a0-ac17-0778ad5fe611.005.png)

**React Component**

**useState: React Hook that lets you add a state variable to your component.**

**EX:**

```bash
      const [city, setCity] = useState([]);

      const addCities = (text) => {

      setCity((prevCities) => [...prevCities, text]); //Store prevCities as a temporary var.

      }; <input

      value={text}

      onChange={(e) => setText(e.target.value)} //set input field to text variable name="city"

      type="text"

      placeholder="Enter City"

      />

      <button onClick={() => addCities(text)}>Add</button>
```

…prevCities act as a city variable that contains a list of arrays that are ready for text to push into array ( prevCities = city.push(text) )
