// HTML dynamically with JS

const create = document.querySelector(".create-btn");
const addFloor = document.querySelector(".building");

create.addEventListener("click", addFloorsAndLifts);

function addFloorsAndLifts() {
  const newFloors = document.createElement("div");

  // newFloors.classList.add("Floors");
  newFloors.innerHTML = `
  <div class="Floors">
            <h4>Floor ${4}</h4>
            <div class="lift-btns">
                <button id="UP">Up</button>
                <button id="DOWN">Down</button>
            </div>
             <div>

             ${"Dynamically render lifts"}
                <svg width="40" height="80">
                    <rect width="300" height="100" style="fill:rgb(99, 99, 255);stroke-width:2;stroke:rgb(0,0,0)" />
                </svg>
                <svg width="40" height="80">
                    <rect width="300" height="100" style="fill:rgb(99, 99, 255);stroke-width:2;stroke:rgb(0,0,0)" />
                </svg>
                <svg width="40" height="80">
                    <rect width="300" height="100" style="fill:rgb(99, 99, 255);stroke-width:2;stroke:rgb(0,0,0)" />
                </svg>
                
            </div>
        </div>`;

  addFloor.appendChild(newFloors);
  console.log("function is working");
}

// Input Handler
create.addEventListener("click", () => {
  const floorInput = document.getElementById("floor-input").value;
  const liftInput = document.getElementById("lift-input").value;

  console.log(`${floorInput} Floors and ${liftInput} Lifts`);

  if (!floorInput || !liftInput) {
    alert("Fill all Fields");
    return false;
  }

  if (floorInput <= 0) {
    alert("Our Floors don't go Underground");
    return false;
  }
  if (liftInput <= 0) {
    alert("We've got no stairs");
  }
  return true;
});

// Handling the loop for Floors and lIfts

let noOfFloors = [];
let noOfLifts = [];

for (let noOfFloors = 0; i === noOfFloors; noOfFloors++) {
  const newFloors = document.createElement("div");

  // newFloors.classList.add("Floors");
  newFloors.innerHTML = `<div class="Floors">
            <h4>Floor ${4}</h4>
            <div class="lift-btns">
                <button id="UP">Up</button>
                <button id="DOWN">Down</button>
            </div>
             <div>

             ${"Dynamically render lifts"}
                <svg width="40" height="80">
                    <rect width="300" height="100" style="fill:rgb(99, 99, 255);stroke-width:2;stroke:rgb(0,0,0)" />
                </svg>

                <svg width="40" height="80">
                    <rect width="300" height="100" style="fill:rgb(99, 99, 255);stroke-width:2;stroke:rgb(0,0,0)" />
                </svg>
            </div>
        </div>`;

  addFloor.appendChild(newFloors);
}
