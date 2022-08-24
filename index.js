// Trying to create HTML dynamically

const create = document.querySelector(".create-btn");
const addFloor = document.querySelector(".building");

create.addEventListener("click", addFloorsAndLifts);

function addFloorsAndLifts() {
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
  console.log("function is working");
}

// Handling the loop for lifts

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
