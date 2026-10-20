
/* =========================================================
   QUINN CALLAN — ENGINEERING PORTFOLIO
   SCRIPT.JS

   TABLE OF CONTENTS
   01. Project filters
   02. Project documentation
   03. Project pop-up functionality
   04. Copy email button
   05. Footer year
   06. Mobile navigation
========================================================= */


/* =========================================================
   01. PROJECT FILTERS
========================================================= */

// Find the filter buttons and project cards

const filterButtons = document.querySelectorAll('.filter');

const projectCards = document.querySelectorAll('.project-card');

const projectCount = document.getElementById('projectCount');


// Add a click event to each filter button

filterButtons.forEach(button => {

  button.addEventListener('click', () => {

    // Get the category selected by the user

    const selected = button.dataset.filter;

    let visible = 0;


    // Update which filter button is active

    filterButtons.forEach(filter => {

      const active = filter === button;

      filter.classList.toggle('active', active);

      filter.setAttribute('aria-pressed', String(active));

    });


    // Show or hide projects based on their category

    projectCards.forEach(card => {

      const show =
        selected === 'all' ||
        card.dataset.kind === selected;

      card.hidden = !show;

      if (show) {
        visible++;
      }

    });


    // Update the project count

    projectCount.textContent =
      String(visible).padStart(2, '0');

  });

});


/* =========================================================
   02. PROJECT DOCUMENTATION
========================================================= */

/*
  Each project has its own entry in the notes object.

  title = Heading shown in the pop-up
  body  = HTML content displayed inside the pop-up

  To add another project in the future:
  1. Create another project card in index.html
  2. Give its button a unique data-notes value
  3. Add a matching entry here
*/

const notes = {


  /* =======================================================
     PROJECT 1 — FPGA TRAFFIC LIGHT CONTROLLER
  ======================================================= */

  traffic: {

    title: 'FPGA Traffic Light Controller',

    body: `

      <p>
        This project involved designing and implementing a
        sensor-responsive traffic light controller for a main
        highway and a secondary farm road.
      </p>

      <p>
        The system was developed using Verilog hardware
        description language, simulated in AMD Vivado,
        and implemented on a Digilent Zybo Z7-10 FPGA
        development board.
      </p>


      <h3>Project Objective</h3>

      <p>
        Design a digital traffic control system that
        coordinates traffic signals between a main highway
        and a farm road while responding to vehicle
        detection from a sensor.
      </p>

      <p>
        The controller uses a finite state machine (FSM)
        to manage traffic signal transitions and enforce
        timing requirements.
      </p>


      <h3>Hardware &amp; Software</h3>

      <ul>
        <li>Digilent Zybo Z7-10 FPGA development board</li>
        <li>Verilog hardware description language</li>
        <li>AMD Vivado design and simulation environment</li>
        <li>Finite state machine design</li>
        <li>Digital logic and sequential circuits</li>
      </ul>


      <h3>System Design</h3>

      <p>
        The traffic light controller was modeled using
        six states representing different combinations
        of highway and farm-road traffic signals.
      </p>

      <p>
        State transitions are controlled by timing
        conditions, sensor input, and reset logic.
        The controller returns to its initial state
        when the reset signal is activated.
      </p>


      <figure>

        <img
          src="assets/traffic-light-state-diagram.jpg"
          alt="Six-state finite state machine diagram for the traffic light controller"
          loading="lazy"
        >

        <figcaption>
          Finite state machine diagram showing traffic
          signal states, timing conditions, and transitions.
        </figcaption>

      </figure>


      <h3>Physical Implementation</h3>

      <p>
        After developing the Verilog design, the controller
        was implemented on the Zybo Z7-10 FPGA board.
        The board's switches, buttons, and LEDs provide
        a hardware interface for testing the design.
      </p>


      <figure>

        <img
          src="assets/fpga-board.jpg"
          alt="Digilent Zybo Z7-10 FPGA development board"
          loading="lazy"
        >

        <figcaption>
          Digilent Zybo Z7-10 FPGA development board
          used for implementation and testing.
        </figcaption>

      </figure>


      <h3>Skills Developed</h3>

      <ul>
        <li>Finite state machine design</li>
        <li>Sequential digital logic</li>
        <li>Verilog programming</li>
        <li>FPGA implementation</li>
        <li>Hardware testing and debugging</li>
      </ul>


      <h3>Project Takeaways</h3>

      <p>
        This project provided hands-on experience
        translating a state diagram into working
        digital hardware. It demonstrated how
        sequential logic and timing requirements
        can be combined to control a real-world
        process.
      </p>

    `

  },


  /* =======================================================
     PROJECT 2 — ESP32 CLIMATE MONITOR
  ======================================================= */

  climate: {

    title: 'ESP32 Climate Monitoring System',

    body: `

      <p>
        A Wi-Fi-connected environmental monitoring
        system built using an ESP32 microcontroller,
        an environmental sensor, and two OLED displays.
      </p>

      <p>
        The system measures temperature, humidity,
        and atmospheric pressure, displays the
        readings locally, and transmits sensor data
        to a cloud database for visualization through
        a custom web dashboard.
      </p>


      <h3>Project Objective</h3>

      <p>
        Develop an embedded system capable of
        continuously monitoring environmental
        conditions while providing both a local
        display and remote access to recorded data.
      </p>

      <p>
        The project combines embedded programming,
        sensor communication, wireless networking,
        cloud data storage, and web development.
      </p>


      <h3>Hardware Components</h3>

      <ul>
        <li>ESP32 development board</li>
        <li>BME environmental sensor</li>
        <li>Two I2C OLED displays</li>
        <li>Solderless breadboard</li>
        <li>Jumper wires</li>
        <li>USB power and programming connection</li>
      </ul>


      <h3>Software &amp; Technologies</h3>

      <ul>
        <li>C++ embedded programming</li>
        <li>Visual Studio Code</li>
        <li>PlatformIO</li>
        <li>I2C communication protocol</li>
        <li>ESP32 Wi-Fi connectivity</li>
        <li>Supabase cloud database</li>
        <li>HTML, CSS, and JavaScript</li>
      </ul>


      <h3>Hardware Implementation</h3>

      <p>
        The ESP32 communicates with the environmental
        sensor and both OLED displays through the
        I2C communication bus.
      </p>

      <p>
        One OLED displays the current room temperature,
        humidity, and pressure. The second OLED
        displays a graph of recent temperature
        measurements.
      </p>


      <figure>

        <img
          src="assets/esp32-climate-monitor.jpg"
          alt="ESP32 environmental monitoring system with two OLED displays"
          loading="lazy"
        >

        <figcaption>
          ESP32 climate monitor assembled on a
          breadboard with dual OLED displays.
        </figcaption>

      </figure>


      <h3>Cloud Integration</h3>

      <p>
        In addition to displaying sensor readings
        locally, the ESP32 transmits measurements
        over Wi-Fi to a Supabase database.
      </p>

      <p>
        Storing the measurements in the cloud allows
        historical environmental data to be retrieved
        and displayed through a separate web interface.
      </p>


      <h3>Web Dashboard</h3>

      <p>
        A custom dashboard was developed to display
        environmental measurements in a clean,
        easy-to-read interface.
      </p>

      <p>
        The dashboard includes current temperature,
        relative humidity, atmospheric pressure,
        and an interactive temperature history chart.
      </p>


      <figure>

        <img
          src="assets/climate-dashboard.png"
          alt="ESP32 climate dashboard displaying environmental data and temperature history"
          loading="lazy"
        >

        <figcaption>
          Custom web dashboard displaying sensor
          readings and historical temperature data.
        </figcaption>

      </figure>


      <h3>Skills Developed</h3>

      <ul>
        <li>Embedded C++ programming</li>
        <li>I2C sensor communication</li>
        <li>Microcontroller integration</li>
        <li>Real-time sensor data visualization</li>
        <li>Wi-Fi communication</li>
        <li>Cloud database integration</li>
        <li>Frontend web development</li>
        <li>Hardware and software debugging</li>
      </ul>


      <h3>Project Takeaways</h3>

      <p>
        This project demonstrates the integration
        of embedded hardware, software, and
        cloud-connected services into a complete
        environmental monitoring system.
      </p>

      <p>
        It provided practical experience working
        with microcontrollers, sensor communication,
        data storage, and the development of
        interfaces for visualizing real-world data.
      </p>

    `

  }

};


/* =========================================================
   03. PROJECT POP-UP FUNCTIONALITY
========================================================= */

// Find the dialog element

const dialog = document.getElementById('notesDialog');


// Find every button with a data-notes attribute

document.querySelectorAll('[data-notes]').forEach(button => {

  button.addEventListener('click', () => {

    // Find the corresponding project documentation

    const note = notes[button.dataset.notes];

    if (!note) {
      return;
    }


    // Update the dialog title

    document.getElementById('notesTitle').textContent =
      note.title;


    // Insert the project documentation

    document.getElementById('notesBody').innerHTML =
      note.body;


    // Open the dialog

    dialog.showModal();

  });

});


// Close dialog using the X button

dialog.querySelector('.dialog-close').addEventListener(
  'click',
  () => {
    dialog.close();
  }
);


// Close dialog by clicking outside of it

dialog.addEventListener('click', event => {

  if (event.target === dialog) {
    dialog.close();
  }

});


/* =========================================================
   04. COPY EMAIL BUTTON
========================================================= */

const copyEmailButton = document.getElementById('copyEmail');

copyEmailButton.addEventListener('click', async event => {

  const button = event.currentTarget;

  try {

    // Copy email address to clipboard

    await navigator.clipboard.writeText(
      'qcallan8@gmail.com'
    );


    // Temporarily change button text

    button.textContent = 'Copied!';


    // Restore original text after 1.6 seconds

    window.setTimeout(() => {

      button.textContent = 'Copy Email';

    }, 1600);

  } catch {

    // Fallback if clipboard access is unavailable

    window.location.href =
      'mailto:qcallan8@gmail.com';

  }

});


/* =========================================================
   05. AUTOMATIC FOOTER YEAR
========================================================= */

// Automatically displays the current year

document.getElementById('year').textContent =
  new Date().getFullYear();


/* =========================================================
   06. MOBILE NAVIGATION
========================================================= */

const menuToggle = document.querySelector('.menu-toggle');

const navLinks = document.querySelector('.nav-links');


// Open or close mobile navigation

menuToggle.addEventListener('click', () => {

  const open = navLinks.classList.toggle('open');

  menuToggle.setAttribute(
    'aria-expanded',
    String(open)
  );

});


// Close mobile navigation after selecting a link

navLinks.querySelectorAll('a').forEach(link => {

  link.addEventListener('click', () => {

    navLinks.classList.remove('open');

    menuToggle.setAttribute(
      'aria-expanded',
      'false'
    );

  });

});
