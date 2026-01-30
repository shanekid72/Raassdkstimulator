import os
import re

# Directory to walk
root_dir = r"c:/Users/786000726/Downloads/raas sdkstimulator/src"

# Regex to valid figma imports
# Example: import imgCurrencyIcon from "figma:asset/219ba41d35587a615caf5a73b9740a704e57cb41.png";
# We want to capture the variable name and replace the path.
pattern = re.compile(r'import\s+(\w+)\s+from\s+"figma:asset\/[^"]+";')
replacement = r'import \1 from "@/assets/placeholder.svg";'

print(f"Scanning {root_dir}...")

for subdir, dirs, files in os.walk(root_dir):
    for file in files:
        if file.endswith(".tsx") or file.endswith(".ts"):
            filepath = os.path.join(subdir, file)
            
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = pattern.sub(replacement, content)
            
            if new_content != content:
                print(f"Updating {file}")
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)

print("Replacement complete.")
