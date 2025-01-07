// Fetch the latest version of your module from the Deno.land API
async function getLatestVersion(moduleName: string): Promise<string> {
  const url = `https://apiland.deno.dev/v2/modules/${moduleName}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch the latest version: ${response.statusText}`);
  }
  const data = await response.json();
  return data.latest_version;
}

// Update the version in your documentation
async function updateDocumentation(moduleName: string, docPath: string) {
  try {
    const latestVersion = await getLatestVersion(moduleName);

    // Read the content of the documentation
    let content = await Deno.readTextFile(docPath);

    // Replace the old version with the latest version
    const updatedContent = content.replace(
      /https:\/\/deno\.land\/x\/[a-zA-Z0-9_]+@[\d.]+/g,
      `https://deno.land/x/${moduleName}@${latestVersion}`
    );

    // Write the updated content back to the file
    await Deno.writeTextFile(docPath, updatedContent);
    console.log(`Updated ${docPath} with the latest version: ${latestVersion}`);
  } catch (error) {
    console.error(`Failed to update documentation: ${error.message}`);
  }
}

// Usage
const moduleName = "ip2location"; // Replace with your module name
const docPath = "./docs/source/quickstart.md"; // Path to your documentation file

updateDocumentation(moduleName, docPath);
