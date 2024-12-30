For the most updated list of publications, see my <a href="https://scholar.google.nl/citations?user=Zw6i1v0AAAAJ&hl=en">Google Scholar</a>.<br>
If you're interested in my Ph.D. Thesis, see here: <a href="./assets/files/thesis-presentation-mz.pdf">[Slides]</a> <a href="https://arxiv.org/pdf/2404.18977">[Thesis]</a>.

<div class="publications">
  <ol class="bibliography">
    {% for link in site.data.publications.main %}
      {% if forloop.index <= 5 %}
      <!-- Show the first 5 publications -->
      <li class="publication-item">
      {% else %}
      <!-- Hide everything after the first 5 by default -->
      <li class="publication-item hidden">
      {% endif %}
      
        <div class="pub-row" style="margin-bottom: 1px;">
          <div class="col-sm-3 abbr" style="position: relative; padding: 3px;">
            {% if link.image %}
              <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width:100px; height:auto;">
              {% if link.conference_short %}
                <abbr class="badge">{{ link.conference_short }}</abbr>
              {% endif %}
            {% endif %}
          </div>
          <div class="col-sm-9" style="position: relative; padding: 3px;">
            <div class="title"><a href="{{ link.pdf }}" target="_blank">{{ link.title }}</a></div>
            <div class="author">{{ link.authors }}</div>
            <div class="periodical">
              <em>{{ link.conference_short }}</em> ({{ link.year }})
            </div>
            <ul class="links" style="list-style: none; padding-left: 0; margin-top: 4px; margin-bottom: 2px;">
              {% if link.pdf %}
                <li style="display: inline; margin-right: 10px;">
                  <a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" target="_blank" style="font-size:12px;">PDF</a>
                </li>
              {% endif %}
              {% if link.code %}
                <li style="display: inline; margin-right: 10px;">
                  <a href="{{ link.code }}" class="btn btn-sm z-depth-0" target="_blank" style="font-size:12px;">Code</a>
                </li>
              {% endif %}
              {% if link.page %}
                <li style="display: inline; margin-right: 10px;">
                  <a href="{{ link.page }}" class="btn btn-sm z-depth-0" target="_blank" style="font-size:12px;">Project Page</a>
                </li>
              {% endif %}
              {% if link.bibtex %}
                <li style="display: inline; margin-right: 10px;">
                  <a href="{{ link.bibtex }}" class="btn btn-sm z-depth-0" target="_blank" style="font-size:12px;">BibTex</a>
                </li>
              {% endif %}
            </ul>
            {% if link.notes %}
              <strong><i style="color:#e74d3c">{{ link.notes }}</i></strong>
            {% endif %}
            {% if link.others %}
              {{ link.others }}
            {% endif %}
          </div>
        </div>
      </li>
    {% endfor %}
  </ol>
</div>

<!-- Show More button -->
<button id="showMoreButton" onclick="showMorePublications()" class="show-more-btn">Show More</button>

<!-- Inline CSS to hide publications and style the button -->
<style>
  /* Hide items beyond the first 5 */
  .hidden {
    display: none;
  }

  /* Nicer "Show More" button */
  .show-more-btn {
    display: block;                /* center the button by default */
    margin: 20px auto;            /* some spacing above/below, auto left/right */
    padding: 8px 16px;            /* padding for a nicer look */
    background-color: var(--global-theme-color); 
    color: #fff;
    border: none;
    border-radius: 4px;           /* rounded corners */
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;
  }

  .show-more-btn:hover {
    background-color: var(--global-hover-color); /* on hover, use your site's hover color */
  }

  /* Tighter spacing between items */
  .publications ol.bibliography li {
    margin-bottom: 0.4rem;  /* slightly reduced spacing from default */
  }
</style>

<!-- Inline script to reveal the hidden publications -->
<script>
  function showMorePublications() {
    var hiddenItems = document.querySelectorAll('.publication-item.hidden');
    hiddenItems.forEach(function(item) {
      item.classList.remove('hidden');
    });
    // Optionally hide the button after showing all
    document.getElementById('showMoreButton').style.display = 'none';
  }
</script>
