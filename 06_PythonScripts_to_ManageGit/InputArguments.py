# Include standard modules
import argparse

# Initiate the parser
parser = argparse.ArgumentParser()

# Add long and short argument
parser.add_argument("--name", "-n", help="set Unity project name")
parser.add_argument("--path", "-p", help="set path to Unity.exe")
parser.add_argument("--git", "-g", help= "set Git repository Name")
# Read arguments from the command line
args = parser.parse_args()

# Check for --name
if args.name:
    print("Set Unity project name to", args.name)
# Check for --path
if args.path:
    print("Set path to unity.exe to", args.path)
# Check for --git
if args.git:
    print("Set Git repository Name to", args.git)
