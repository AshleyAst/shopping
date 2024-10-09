function copyCommand(command) {
    navigator.clipboard.writeText(command)
        .then(() => {
            alert(`Command copied to clipboard: ${command}`);
        })
        .catch(err => {
            console.error('Failed to copy command: ', err);
        });
}
