function getEditDistance(s, t) {
        if (s.length === 0) return t.length;
        if (t.length === 0) return s.length;
    
        let cost = 0;
    
        if (s[s.length - 1] !== t[t.length - 1]) {
    
            cost = 1;
            const d1 = getEditDistance(s.slice(0, -1), t) + 1;
            const d2 = getEditDistance(s, t.slice(0, -1)) + 1;
            const d3 = getEditDistance(s.slice(0, -1), t.slice(0, -1)) + cost;
    
            return Math.min(d1, d2, d3);
    
        };
    
    
        return getEditDistance(s.slice(0, -1), t.slice(0, -1));

    };    

    module.exports = getEditDistance;