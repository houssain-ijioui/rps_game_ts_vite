

function compare(playerMove: string, computerMove: string): string {
    let result: string;
    if (playerMove === computerMove) {
        return result = "It's a tie!";
    }

    // Rock beats Scissors
    if (playerMove === 'Rock' && computerMove === 'Scissors') {
        return result = 'Player wins!';
    }

    // Scissors beats Paper
    if (playerMove === 'Scissors' && computerMove === 'Paper') {
        return result = 'Player wins!';
    }

    // Paper beats Rock
    if (playerMove === 'Paper' && computerMove === 'Rock') {
        return result = 'Player wins!';
    }

    else {
        // Otherwise, computer wins
        return result = 'Computer wins!';
    }
}

export default compare;