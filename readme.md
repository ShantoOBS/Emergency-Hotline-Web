<h2>📌 JavaScript Interview Questions & Answers</h2>

<h3>1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll</h3>
<ul>
  <li><b>getElementById("id")</b> → Returns a single element with the given ID.</li>
  <li><b>getElementsByClassName("class")</b> → Returns a live HTMLCollection of elements with that class.</li>
  <li><b>querySelector("selector")</b> → Returns the first element that matches a CSS selector.</li>
  <li><b>querySelectorAll("selector")</b> → Returns a static NodeList of all matching elements.</li>
</ul>

<h3>2. How do you create and insert a new element into the DOM?</h3>
<ol>
  <li>Create element → <code>document.createElement("div")</code></li>
  <li>Add content/attributes → <code>textContent</code>, <code>classList</code></li>
  <li>Insert into DOM → <code>appendChild</code>, <code>append</code>, <code>before</code>, <code>after</code></li>
</ol>
<pre>
<code>
let div = document.createElement("div");
div.textContent = "Hello World!";
document.body.appendChild(div);
</code>
</pre>

<h3>3. What is Event Bubbling and how does it work?</h3>
<p>Event Bubbling means an event starts at the innermost element and propagates outward to its ancestors and its child clicked then parent clicked.</p>
<pre>
<code>
parent.addEventListener("click", () => console.log("Parent clicked"));
child.addEventListener("click", () => console.log("Child clicked"));
</code>
</pre>

<h3>4. What is Event Delegation in JavaScript? Why is it useful?</h3>
<p>Event Delegation attach one listener on a parent, handle all child events via <code>event.target</code>. it is useful because it saves memory and works on dynamically added elements.</p>

<pre>
<code>
parent.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    console.log("Button clicked:", e.target.textContent);
  }
});
</code>
</pre>

<h3>5. Difference between preventDefault() and stopPropagation()</h3>
<ul>
  <li>preventDefault() stops the browser's default action (form submit, link navigation, etc.)</li>
  <li>stopPropagation() stops the event from bubbling up to parent elements.</li>
</ul>
<pre>
<code>
// Example: prevent form submission
form.addEventListener("submit", (e) => e.preventDefault());

// Example: stop bubbling
child.addEventListener("click", (e) => e.stopPropagation());
</code>
</pre>
