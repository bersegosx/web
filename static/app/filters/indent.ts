

    export function IndentFilter() {
        return function(input: string): string {
        		var str = input;
						var level = 0;
						var indexA = 0;
						var nl = "<br/>";
						var spacer = "&nbsp;&nbsp;&nbsp;&nbsp;";
						var result = "";

						for (var i=0; i < str.length; i++) {
								if(str[i]==")") {
										level --;
										if (str[i-1]!=="(") {
												result += nl + spacer.repeat(level);
										}
								}
								result += str[i];
								if(str[i] == "(") {
										level ++;
										if(str[i+1] == ")") {
												continue;
										}
										result += nl + spacer.repeat(level);
								}
						}
						return result;
        }
    }
