"use strict";

const chalk = require("chalk");

const clearConsole = () => {
  process.stdout.write(
    process.platform === "win32" ? "\x1B[2J\x1B[0f" : "\x1B[2J\x1B[3J\x1B[H"
  );
};

clearConsole();

console.log(chalk.cyan.bold('\n╔══════════════════════════════════════════════════════════════╗'));
console.log(chalk.cyan.bold('║') + chalk.cyan.bold('                    © CROSLEXT  SILENT                     ') + '║');
console.log(chalk.cyan.bold('╚══════════════════════════════════════════════════════════════╝\n'));

console.log(chalk.bold('🔰 ＣＲＯＳＬＥＸＴ ＳＩＬＥＮＴ  -  ＢＡＩＬＳ  - ＢＹ ＷＩＤＩＸ ＦＬＯＷ  🔰') + '\n');
console.log(chalk.bold('╭────────────────────────────────────────────────────────────╮'));
console.log(chalk.bold('│') + chalk.cyan.bold('        🚀 Bot is now online and ready to serve! 🚀          '));
console.log(chalk.bold('│') + chalk.cyan.bold('        ✨ Powered by Om Widix - MD API ✨                '));
console.log(chalk.bold('╰────────────────────────────────────────────────────────────╯') + '\n');

console.log(chalk.cyan.bold('                      CROSLEXT SILENT                      '));
console.log(chalk.cyan.bold('╭────────────────────────────────────────────────────────────╮'));
console.log(chalk.bold('│') + chalk.green.bold('              ⏰ Start Time: ') + new Date().toLocaleString());
console.log(chalk.bold('│') + chalk.green.bold('              📱 Platform: Node.js'));
console.log(chalk.bold('│') + chalk.green.bold('              ⚡ Status: Active'));
console.log(chalk.bold('│') + chalk.green.bold('              📡 Mode: Public'));
console.log(chalk.bold('│') + chalk.green.bold('              👑 Owner: WidixFlow'));
console.log(chalk.bold('│') + chalk.green.bold('              👥 Users: Online'));
console.log(chalk.bold('╰────────────────────────────────────────────────────────────╯') + '\n');

console.log(chalk.cyan.bold('╔══════════════════════════════════════════════════════════════╗'));

// ============================
// FIXED __createBinding
// ============================

var createBinding =
  (this && this.createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);

        if (
          !desc ||
          (!("get" in desc) && (desc.writable || desc.configurable))
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }

        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });

var exportStar =
  (this && this.exportStar) ||
  function (m, exports) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p))
        createBinding(exports, m, p);
  };

var importDefault =
  (this && this.importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };

Object.defineProperty(exports, "__esModule", { value: true });

const Socket_1 = importDefault(require("./Socket"));

exports.makeWASocket = Socket_1.default;

exportStar(require("../WAProto"), exports);
exportStar(require("./Utils"), exports);
exportStar(require("./Types"), exports);
exportStar(require("./Store"), exports);
exportStar(require("./Defaults"), exports);
exportStar(require("./WABinary"), exports);
exportStar(require("./WAM"), exports);
exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
