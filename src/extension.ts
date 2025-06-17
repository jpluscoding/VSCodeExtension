import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('J+ language extension is now active!');

  let disposable = vscode.commands.registerCommand('jplus.hello', () => {
    vscode.window.showInformationMessage('Hello from J+ extension!');
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}