  export const getAvatarColor = (firstName: string, lastName: string) => {
    const nameString = firstName + lastName;
    let hash = 0;
    
    for (let i = 0; i < nameString.length; i++) {
      hash = nameString.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = Math.abs(hash) % 360;
    return `hsl(${hue}, 70%, 85%)`;
  };