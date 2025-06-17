"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = require("vscode");
function activate(context) {
    console.log('J+ language extension is now active!');
    let disposable = vscode.commands.registerCommand('jplus.hello', () => {
        vscode.window.showInformationMessage('Hello from J+ extension!');
    });
    context.subscriptions.push(disposable);
}
function deactivate() { }
//# sourceMappingURL=extension.js.map