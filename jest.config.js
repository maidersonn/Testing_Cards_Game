/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    html: `
    <div>
      <header>
        Cada oveja con su pareja ! <br />
        Empareja las cartas para ganar.
      </header>
      <section class="content" id="content">
        <form name="level">
          <legend>Elige el nivel de dificultad.</legend>
          <label for="beginner">Principiante</label>
          <input type="radio" name="levels" id="beginner" tabindex="1" />
          <label for="medium">Medio</label>
          <input type="radio" name="levels" id="medium" tabindex="2" />
          <label for="expert">Experto</label>
          <input type="radio" name="levels" id="expert" tabindex="3" />
        </form>
      </section>
      <div id="myModal"></div>
    </div>`,
    url: "https://jestjs.io/",
    userAgent: "Agent/007",
  },
};

module.exports = config;
